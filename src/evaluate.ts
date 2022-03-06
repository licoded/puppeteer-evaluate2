import path from 'path';
import puppeteer from 'puppeteer';
import buildJsContent from '/@/build';

function _path(relativePath: string) {
  return path.resolve(relativePath);
}

function isFunction(f: object) {
  return Object.prototype.toString.call(f) === '[object Function]';
}

function hasDefaultExportFunc({ code, name }: IBuildRes) {
  const codeRunRes = eval(`${code}${name}`);
  return isFunction(codeRunRes.default);
}

function getEvaluateFunc<F extends IFunction>(relativePath: string) {
  const filePath = _path(relativePath);
  const funcObj = buildJsContent(filePath);

  if (!hasDefaultExportFunc(funcObj)) {
    throw new Error(`error: Could not find default export function in "${filePath}"`);
  }

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