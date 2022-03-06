import { getBaiduTitile } from './puppeteer';

test('百度标题：百度一下，你就知道', async () => {
  await page.goto('https://www.baidu.com');
  await expect(getBaiduTitile(page)).resolves.toMatch('百度一下，你就知道');
});