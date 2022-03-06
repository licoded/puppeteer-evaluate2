import path from 'path';
import getEvaluateFunc from '/@/evaluate';

function _path(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

test('Fail on missing JavaScript/Typescript file [by evaluate]', async () => {
  expect(() => {
    getEvaluateFunc(_path("filenotexist.ts"))
  }).toThrowError(/error: Could not resolve "\S*filenotexist.ts"/);
});