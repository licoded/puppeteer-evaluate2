import path from 'path';
import puppeteer from 'puppeteer';
import buildJsContent from './build';

type IFunction = (...args: Array<any>) => any;

function _path(relativePath: string) {
  return path.resolve(relativePath);
}

function getEvaluateFunc<F extends IFunction>(relativePath: string) {
  const filePath = _path(relativePath);
  const funcObj = buildJsContent(filePath);

  return function (page: puppeteer.Page, ...args: Parameters<F>): Promise<ReturnType<F>> {
    return page.evaluate(
      ({ code, name }, args: Parameters<F>) => {
        return (() => {
          const myFunc = eval(`${code}${name}`).default;
          return myFunc(...args);
        })();
      },
      funcObj, args,
    );
  };
}

export default getEvaluateFunc;