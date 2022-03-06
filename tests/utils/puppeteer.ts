import puppeteer from 'puppeteer';

type IFunction = (...args: Array<any>) => any;

type UndefIndex<T extends any[], I extends number> = {
  [P in keyof T]: P extends Exclude<keyof T, keyof any[]> ? P extends `${I}` ? undefined : T[P] : T[P]
}

type FilterUndefined<T extends any[]> = T extends [] ? [] :
  T extends [infer H, ...infer R] ?
  H extends undefined ? FilterUndefined<R> : [H, ...FilterUndefined<R>] : T;

type SpliceTuple<T extends any[], I extends number> = FilterUndefined<UndefIndex<T, I>>;


export async function run<F extends IFunction>(func: F, ...args: SpliceTuple<Parameters<F>, 0> | []): Promise<ReturnType<F>> {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const result = await func(page, ...args);

  await page.close();
  await browser.close();

  return result;
}