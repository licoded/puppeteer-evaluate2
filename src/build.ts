import esbuild from 'esbuild';
import { v4 as uuidv4 } from 'uuid';

export default function buildJsContent(filePath: string) {
  const exposeFunctionName = '__tmp' + uuidv4().split('-').join('');
  const buildResult = esbuild.buildSync({
    entryPoints: [filePath],
    bundle: true,
    write: false,
    format: 'iife',
    target: ['esnext'],
    platform: 'browser',
    globalName: exposeFunctionName,
  });
  return {
    code: buildResult.outputFiles[0].text,
    name: exposeFunctionName,
  };
}



