import { defineConfig } from 'rollup';
import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3';

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const globals = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

const config = defineConfig({
  input: 'src/index.tsx',
  treeshake: false,
  output: {
    compact: true,
    minifyInternalExports: true,
    dir: 'lib',
    format: 'cjs',
    sourcemap: true,
    sourcemapExcludeSources: true,
    indent: false,
    preserveModules: true,
    preserveModulesRoot: 'src',
    exports: 'auto',
  },
  plugins: [
    swc(defineRollupSwcOption({
      envName: 'production',
      sourceMaps: true,
      tsconfig: 'tsconfig.production.json',
      minify: true,
    })),
  ],
  watch: {
    chokidar: { useFsEvents: false },
  },
  external: Object.keys(globals),
});

export default config;
