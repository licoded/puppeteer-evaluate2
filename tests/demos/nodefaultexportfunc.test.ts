import path from 'path';
import getEvaluateFunc from '/@/evaluate';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test(`Fail on missing default export function`, async () => {
  expect(() => {
    getEvaluateFunc(_path('nodefaultexportfunc.ts'))
  }).toThrowError(/error: Could not find default export function in "\S*nodefaultexportfunc.ts"/);
});