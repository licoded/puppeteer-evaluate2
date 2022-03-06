import puppeteer from 'puppeteer';

export async function run<F extends IFunction>(func: F, ...args: removeFirst<Parameters<F>>): Promise<ReturnType<F>> {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const result = await func(page, ...args);

  await page.close();
  await browser.close();

  return result;
}