import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { getToolIconId } from './toolIconLogic';

test('every skill item in PORTFOLIO_DATA resolves to a dedicated non-generic tool icon', () => {
  for (const category of PORTFOLIO_DATA.skillCategories) {
    for (const item of category.items) {
      const iconId = getToolIconId(item);
      assert.notEqual(
        iconId,
        'generic',
        `Expected dedicated icon for skill "${item}" in category "${category.id}"`
      );
    }
  }
});

test('every project stack item in PORTFOLIO_DATA resolves to a dedicated non-generic tool icon', () => {
  for (const project of PORTFOLIO_DATA.projects) {
    for (const tech of project.stack) {
      const iconId = getToolIconId(tech);
      assert.notEqual(
        iconId,
        'generic',
        `Expected dedicated icon for project tech "${tech}" in project "${project.id}"`
      );
    }
  }
});

test('getToolIconId normalizes whitespace and casing reliably', () => {
  assert.equal(getToolIconId('  Docker  '), 'docker');
  assert.equal(getToolIconId('GITHUB ACTIONS'), 'github-actions');
  assert.equal(getToolIconId('unknown-tool'), 'generic');
});
