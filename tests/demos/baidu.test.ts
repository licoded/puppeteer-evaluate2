import path from 'path';
import puppeteer from 'puppeteer';
import getEvaluateFunc from '../../src/evaluate';
import { run } from '../../src/puppeteer';
import getBaiduTitle from './baidu';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test('百度标题：百度一下，你就知道 [by evaluate]', async () => {
  const evaluateGetBaiduTitle = getEvaluateFunc<typeof getBaiduTitle>(_path('baidu.ts'));
  await expect(run(async (page: puppeteer.Page) => {
    await page.goto('https://www.baidu.com');
    return evaluateGetBaiduTitle(page);
  })).resolves.toBe('百度一下，你就知道');
});