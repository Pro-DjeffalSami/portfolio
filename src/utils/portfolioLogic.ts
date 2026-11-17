import type { ProfileData, SkillCategory } from '../data/portfolio';

export type SkillFilterId = 'all' | SkillCategory['id'];

export function filterSkillsByCategory(
  categories: SkillCategory[],
  selectedId: SkillFilterId
): SkillCategory[] {
  if (selectedId === 'all') {
    return categories;
  }
  return categories.filter((category) => category.id === selectedId);
}

/**
 * Encodes a string into WinAnsi (CP1252) single-byte PDF literal escapes
 * so French accents (é, è, ê, à, ô, ç, etc.) render accurately in standard PDF Type1 Helvetica.
 */
export function encodePdfText(input: string): string {
  const normalized = input
    .replaceAll('\u2013', '-')
    .replaceAll('\u2014', '-')
    .replaceAll('\u2019', "'")
    .replaceAll('\u00b7', '-');

  let out = '';
  for (let i = 0; i < normalized.length; i += 1) {
    const code = normalized.charCodeAt(i);
    if (code === 40 || code === 41 || code === 92) {
      // Escape '(', ')', '\'
      out += '\\' + normalized[i];
    } else if (code >= 32 && code <= 126) {
      out += normalized[i];
    } else if (code >= 160 && code <= 255) {
      // Latin-1 / WinAnsi octal escape
      out += '\\' + code.toString(8).padStart(3, '0');
    } else {
      out += ' ';
    }
  }
  return out;
}

function wrapTextLines(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxChars) {
      current += ` ${word}`;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}

/**
 * Generates a valid, self-contained single-page PDF 1.4 document in memory
 * with zero external dependencies so "Télécharger mon CV" works offline in pure static hosting.
 */
export function generateCvPdfBytes(profile: ProfileData): Uint8Array {
  const commands: string[] = [];
  let y = 785;
  const leftX = 50;

  const pushText = (
    text: string,
    options: { font?: 'F1' | 'F2'; size?: number; x?: number; gapAfter?: number } = {}
  ) => {
    const font = options.font ?? 'F1';
    const size = options.size ?? 10;
    const x = options.x ?? leftX;
    const gapAfter = options.gapAfter ?? size + 4;
    commands.push(`BT /${font} ${size} Tf ${x} ${y} Td (${encodePdfText(text)}) Tj ET`);
    y -= gapAfter;
  };

  const pushSectionTitle = (title: string) => {
    y -= 6;
    pushText(title.toUpperCase(), { font: 'F2', size: 10.5, gapAfter: 6 });
    commands.push(`0.75 w ${leftX} ${y + 2} m 545 ${y + 2} l S`);
    y -= 10;
  };

  // Header
  pushText(profile.fullName, { font: 'F2', size: 20, gapAfter: 18 });
  pushText(profile.headline, { font: 'F2', size: 11, gapAfter: 14 });
  pushText(
    `${profile.contact.email}  |  ${profile.contact.phone}  |  ${profile.contact.location}`,
    { size: 9.5, gapAfter: 12 }
  );
  pushText(`LinkedIn : ${profile.linkedinDisplay}`, { size: 9.5, gapAfter: 14 });

  // À propos
  pushSectionTitle('Profil & Recherche de stage');
  const aboutFull = `${profile.about.lead} ${profile.about.paragraphs[0]}`;
  for (const line of wrapTextLines(aboutFull, 88)) {
    pushText(line, { size: 9.8, gapAfter: 13 });
  }

  // Compétences
  pushSectionTitle('Compétences techniques');
  for (const cat of profile.skillCategories) {
    const lineText = `${cat.label} : ${cat.items.join(', ')}`;
    for (const wrapped of wrapTextLines(lineText, 88)) {
      pushText(wrapped, { size: 9.5, gapAfter: 12.5 });
    }
  }

  // Expériences professionnelles
  pushSectionTitle('Expériences professionnelles');
  for (const exp of profile.experiences) {
    pushText(`${exp.company}, ${exp.location} (${exp.period}) - ${exp.description}`, {
      font: 'F2',
      size: 9.8,
      gapAfter: 13,
    });
  }

  // Projets
  pushSectionTitle('Projets clés');
  for (const proj of profile.projects) {
    const header = `${proj.title} (${proj.context})`;
    pushText(header, { font: 'F2', size: 9.8, gapAfter: 12 });
    for (const line of wrapTextLines(proj.shortDescription, 86)) {
      pushText(line, { size: 9.3, x: leftX + 10, gapAfter: 13 });
    }
  }

  const streamContent = commands.join('\n');
  const encoder = new TextEncoder();
  const streamByteLength = encoder.encode(streamContent).length;

  const objects: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${streamByteLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n',
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n',
  ];

  const header = '%PDF-1.4\n';
  const offsets: number[] = [];
  let cursor = encoder.encode(header).length;

  for (const obj of objects) {
    offsets.push(cursor);
    cursor += encoder.encode(obj).length;
  }

  const xrefStart = cursor;
  const xrefLines = [
    `xref\n0 ${objects.length + 1}\n`,
    '0000000000 65535 f \n',
    ...offsets.map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`),
  ];
  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  const fullPdf = header + objects.join('') + xrefLines.join('') + trailer;
  return encoder.encode(fullPdf);
}

export function resolveCvDownloadTarget(profile: ProfileData): {
  href: string;
  filename: string;
  usesStaticAsset: boolean;
} {
  if (profile.cvUrl && profile.cvUrl.trim().length > 0) {
    return {
      href: profile.cvUrl,
      filename: profile.cvDownloadFilename || 'CV_Sami_Djeffal_DevOps.pdf',
      usesStaticAsset: true,
    };
  }
  return {
    href: '',
    filename: profile.cvDownloadFilename || 'CV_Sami_Djeffal_DevOps.pdf',
    usesStaticAsset: false,
  };
}

export function triggerCvDownload(profile: ProfileData): void {
  const target = resolveCvDownloadTarget(profile);
  const link = document.createElement('a');
  link.download = target.filename;

  if (target.usesStaticAsset) {
    link.href = target.href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  const bytes = generateCvPdfBytes(profile);
  const blob = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
