import { getBaiduTitile } from './puppeteer';
import puppeteer from 'puppeteer';

test('百度标题：百度一下，你就知道', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await expect(getBaiduTitile(page)).resolves.toMatch('百度一下，你就知道');

  await page.close();
  await browser.close();
});