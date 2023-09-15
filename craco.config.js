const path = require('path');
const resolvePath = (p) => path.resolve(__dirname, p);
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@pages': resolvePath('./src/pages'),
      '@routes': resolvePath('./src/routes'),
      '@static': resolvePath('./src/static'),
      '@utils': resolvePath('./src/utils'),
      '@redux': resolvePath('./src/redux'),
    },
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimize = true;
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [['mozjpeg', { quality: 85 }]],
            },
          },
          generator: [
            {
              preset: 'webp',
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: ['imagemin-webp'],
              },
            },
          ],
        })
      );
      return webpackConfig;
    },
  },
};
