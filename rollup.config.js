import commonjs from '@rollup/plugin-commonjs'
import renameNodeModules from 'rollup-plugin-rename-node-modules'
import rename from 'rollup-plugin-rename'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { visualizer } from 'rollup-plugin-visualizer'

import pkg from './package.json'

/**
 * The build currently includes node_modules: https://github.com/rollup/rollup/issues/3684
 * isolateModules can't tell that node_modules is special,
 * we include a vendor dir for this included module to ensure it gets included
 */

const nodeModulePlugins = [
  renameNodeModules('vendor'),
  rename({
    include: ['**/*.js'],
    // find node module and place it in the vendor directory
    map: (name) =>
      name
        .replace('node_modules', 'vendor')
        .replace('../../vendor', '../vendor'),
  }),
]

export default {
  input: ['./index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      // preserveModulesRoot: "src", // this will make d.ts files created in the separate folder. Without it, it creates d.ts files in the same folders.
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    typescript({
      sourceMap: false,
      exclude: ['**/*.(test|spec).(ts|tsx)'], // don't generate *.d.ts files
    }),
    resolve(),
    commonjs(),
    ...nodeModulePlugins,
    Boolean(process.env.ANALYZE) &&
      visualizer({
        filename: 'stats.html',
        template: 'treemap',
        open: true,
      }),
  ],
}
