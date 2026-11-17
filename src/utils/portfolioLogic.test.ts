import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from '../data/portfolio';
import {
  encodePdfText,
  filterSkillsByCategory,
  generateCvPdfBytes,
  resolveCvDownloadTarget,
} from './portfolioLogic';

test('PORTFOLIO_DATA contains all required DevOps sections and exact details', () => {
  assert.equal(PORTFOLIO_DATA.fullName, 'Sami Djeffal');
  assert.equal(PORTFOLIO_DATA.skillCategories.length, 5);
  assert.equal(PORTFOLIO_DATA.projects.length, 3);
  assert.equal(PORTFOLIO_DATA.experiences.length, 2);
  assert.equal(PORTFOLIO_DATA.contact.email, 'samidjeffal2020@gmail.com');
  assert.equal(PORTFOLIO_DATA.contact.phone, '+33 7 45 93 00 70');
  assert.equal(
    PORTFOLIO_DATA.linkedinUrl,
    'https://www.linkedin.com/in/djeffal-sami-89312b448/'
  );
});

test('filterSkillsByCategory returns all categories for "all"', () => {
  const result = filterSkillsByCategory(PORTFOLIO_DATA.skillCategories, 'all');
  assert.equal(result.length, 5);
});

test('filterSkillsByCategory filters accurately to selected category', () => {
  const cloudOnly = filterSkillsByCategory(PORTFOLIO_DATA.skillCategories, 'cloud');
  assert.equal(cloudOnly.length, 1);
  assert.equal(cloudOnly[0].label, 'Cloud & IaC');
  assert.deepEqual(cloudOnly[0].items, ['Terraform', 'AWS', 'Azure']);
});

test('encodePdfText escapes parentheses and encodes French accents in WinAnsi octal', () => {
  const encoded = encodePdfText('Déploiement (VPS)');
  assert.ok(encoded.includes('\\('));
  assert.ok(encoded.includes('\\)'));
  // 'é' is charCode 233 -> octal 351
  assert.ok(encoded.includes('\\351'));
});

test('generateCvPdfBytes emits a structurally valid PDF 1.4 document with profile content', () => {
  const pdfBytes = generateCvPdfBytes(PORTFOLIO_DATA);
  const text = new TextDecoder().decode(pdfBytes);

  assert.ok(text.startsWith('%PDF-1.4\n'));
  assert.ok(text.trimEnd().endsWith('%%EOF'));
  assert.ok(text.includes('xref\n0 7\n'));
  assert.ok(text.includes('Sami Djeffal'));
  assert.ok(text.includes('samidjeffal2020@gmail.com'));
  assert.ok(text.includes('Hyperledger Fabric'));
  assert.ok(text.includes('Sonatrach'));
});

test('resolveCvDownloadTarget points to the attached static CV PDF asset', () => {
  const target = resolveCvDownloadTarget(PORTFOLIO_DATA);
  assert.equal(target.usesStaticAsset, true);
  assert.equal(
    target.href,
    '/assets/aistudio/CV_Sami_DJEFFAL_DevOps_Junior_v30_926e35c7.pdf'
  );
  assert.equal(target.filename, 'CV_Sami_Djeffal_DevOps.pdf');
});
