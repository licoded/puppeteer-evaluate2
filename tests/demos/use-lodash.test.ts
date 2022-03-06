import path from 'path';
import getEvaluateFunc from '/@/evaluate';
import splitArr from './use-lodash';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test('test auto load lodash/chunk [by evaluate]', async () => {
  const evaluateGetBaiduTitle = getEvaluateFunc<typeof splitArr>(_path('use-lodash.ts'));
  await expect(evaluateGetBaiduTitle(page)).resolves.toEqual([[1, 2], [3, 4]]);
});