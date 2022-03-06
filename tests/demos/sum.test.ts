import path from 'path';
import getEvaluateFunc from '/@/evaluate';
import sum from './sum';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test('adds 1 + 2 to equal 3 [by evaluate]', async () => {
  const evaluateSum = getEvaluateFunc<typeof sum>(_path('sum.ts'));
  await expect(evaluateSum(page, 1, 2)).resolves.toBe(3);
});