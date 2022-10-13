const path = require('path');

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: [/.js$/],
    exclude: /(node_modules)/,
    use: [
      {
        loader: 'swc-loader',
        options: {
          parseMap: true,
          sourceMaps: true,
          jsc: {
            target: 'es5',
            parser: {
              syntax: 'ecmascript',
              jsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            loose: true,
          },
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          // Provide the path to your tsconfig.json so that your stories can
          // display types from outside each individual story.
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          setDisplayName: false,
        },
      },
    ],
  });

  config.module.rules.push({
    test: [/.ts$|.tsx$/],
    exclude: /(node_modules)/,
    use: [
      {
        loader: 'swc-loader',
        options: {
          parseMap: true,
          sourceMaps: true,
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            loose: true,
          },
        },
      },
    ],
  });

  return config;
};
