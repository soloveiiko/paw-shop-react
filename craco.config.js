const path = require('path');
const resolvePath = (p) => path.resolve(__dirname, p);
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@assets': resolvePath('./src/assets'),
      '@components': resolvePath('./src/components'),
      '@layout': resolvePath('./src/layout'),
      '@pages': resolvePath('./src/pages'),
      '@redux': resolvePath('./src/redux'),
      '@routes': resolvePath('./src/routes'),
      '@services': resolvePath('./src/services'),
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
    //           plugins: [['mozjpeg', { quality: 85 }]],
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
