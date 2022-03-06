import path from 'path';
import getEvaluateFunc from '/@/evaluate';
import getBaiduTitle from './baidu';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test('百度标题：百度一下，你就知道 [by evaluate]', async () => {
  await page.goto('https://www.baidu.com');
  const evaluateGetBaiduTitle = getEvaluateFunc<typeof getBaiduTitle>(_path('baidu.ts'));
  await expect(evaluateGetBaiduTitle(page)).resolves.toBe('百度一下，你就知道');
});