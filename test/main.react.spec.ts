import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { main } from '../src/index.js';
import baseArguments from './helpers/baseArguments.js';
import baseCounters from './helpers/baseCounters.js';

test('Support JSX/TSX files', async () => {
  const cwd = path.resolve('test/fixtures/react');

  const { counters } = await main({
    ...baseArguments,
    cwd,
  });

  assert.deepEqual(counters, {
    ...baseCounters,
    dependencies: 0,
    processed: 2,
    total: 2,
  });
});
