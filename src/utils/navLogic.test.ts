import test from 'node:test';
import assert from 'node:assert/strict';
import { computeScrollProgress, resolveActiveSection } from './navLogic';

test('computeScrollProgress clamps cleanly between 0 and 1', () => {
  assert.equal(computeScrollProgress(0, 2000, 900), 0);
  assert.equal(computeScrollProgress(-50, 2000, 900), 0);
  assert.equal(computeScrollProgress(550, 2000, 900), 0.5);
  assert.equal(computeScrollProgress(1100, 2000, 900), 1);
  assert.equal(computeScrollProgress(1500, 2000, 900), 1);
  assert.equal(computeScrollProgress(100, 800, 900), 0);
});

test('resolveActiveSection selects the last section past the threshold', () => {
  const sections = [
    { id: 'apropos', top: -320 },
    { id: 'competences', top: 90 },
    { id: 'projets', top: 680 },
  ];
  assert.equal(resolveActiveSection(sections, 140), 'competences');
});

test('resolveActiveSection falls back to first section near top of page', () => {
  const sections = [
    { id: 'apropos', top: 620 },
    { id: 'competences', top: 1180 },
  ];
  assert.equal(resolveActiveSection(sections, 140), 'apropos');
  assert.equal(resolveActiveSection([], 140), '');
});
