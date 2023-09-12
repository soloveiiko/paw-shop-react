const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|tiff?|svg)$/i,
        type: 'asset',
        oneOf: [
          {
            resourceQuery: /srcset/,
            use: [
              {
                loader: 'webpack-image-srcset-loader',
                options: {
                  sizes: ['480w', '1024w', '1920w', '2560w', 'original'],
                },
              },
              'file-loader',
              'webpack-image-resize-loader',
            ],
          },
          {
            use: 'file-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 100,
              },
              webp: {
                lossless: true,
              },
              avif: {
                lossless: true,
              },
              png: {},
              gif: {},
            },
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              encodeOptions: {
                webp: {
                  quality: 90,
                },
              },
            },
          },
        ],
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              multipass: true,
              plugins: ['preset-default'],
            },
          },
        },
      }),
    ],
  },
};
