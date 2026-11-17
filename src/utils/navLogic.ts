export interface SectionPosition {
  id: string;
  top: number;
}

/**
 * Computes normalized page scroll progress in [0, 1].
 */
export function computeScrollProgress(
  scrollY: number,
  scrollHeight: number,
  viewportHeight: number
): number {
  const maxScroll = scrollHeight - viewportHeight;
  if (maxScroll <= 0) return 0;
  const ratio = scrollY / maxScroll;
  return Math.max(0, Math.min(1, ratio));
}

/**
 * Determines which section is currently active given section top offsets
 * relative to the viewport and an activation threshold (e.g. navbar height + offset).
 */
export function resolveActiveSection(
  sections: SectionPosition[],
  thresholdPx: number = 140
): string {
  if (sections.length === 0) return '';
  let activeId = sections[0].id;
  for (const section of sections) {
    if (section.top <= thresholdPx) {
      activeId = section.id;
    }
  }
  return activeId;
}
