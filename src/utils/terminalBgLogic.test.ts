import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceScrollOffset,
  BOOT_LOG_LINES,
  computeLogColumns,
} from './terminalBgLogic';

test('BOOT_LOG_LINES provides authentic Linux/DevOps boot sequence entries', () => {
  assert.ok(BOOT_LOG_LINES.length >= 12);
  assert.ok(BOOT_LOG_LINES.some((line) => line.includes('Linux')));
  assert.ok(BOOT_LOG_LINES.some((line) => line.includes('dockerd')));
});

test('computeLogColumns adapts cleanly between mobile and wide desktop', () => {
  const mobileCols = computeLogColumns(390);
  assert.equal(mobileCols.length, 1);

  const desktopCols = computeLogColumns(1440);
  assert.equal(desktopCols.length, 2);
  assert.ok(desktopCols[1].x > desktopCols[0].x);
});

test('advanceScrollOffset wraps seamlessly at totalHeight', () => {
  assert.equal(advanceScrollOffset(0, 1, 20, 400), 20);
  assert.equal(advanceScrollOffset(390, 1, 20, 400), 10);
  assert.equal(advanceScrollOffset(50, 0, 20, 400), 50);
});
