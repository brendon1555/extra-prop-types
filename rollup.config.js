import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    typescript(),
    commonjs({
      include: ['node_modules/**'],
    }),
  ],
};
