const path = require('path');
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@pages': resolvePath('./src/pages'),
      '@routes': resolvePath('./src/routes'),
      '@static': resolvePath('./src/static'),
      '@utils': resolvePath('./src/utils'),
    },
    // configure: (webpackConfig) => {
    //   webpackConfig.optimization.minimize = true;
    //   webpackConfig.optimization.minimizer.push(
    //     new ImageMinimizerPlugin({
    //       minimizer: {
    //         implementation: ImageMinimizerPlugin.imageminMinify,
    //         options: {
    //           plugins: [['imagemin-pngquant', { quality: [0.5, 0.5] }]],
    //         },
    //       },
    //       generator: [
    //         {
    //           preset: 'webp',
    //           implementation: ImageMinimizerPlugin.imageminGenerate,
    //           options: {
    //             plugins: ['imagemin-webp'],
    //           },
    //         },
    //       ],
    //     })
    //   );
    //   return webpackConfig;
    // },
  },
};
