import puppeteer from 'puppeteer'

export async function getBaiduTitile(page: puppeteer.Page) {
  await page.goto('https://www.baidu.com');
  const title = await page.title();
  return title;
}