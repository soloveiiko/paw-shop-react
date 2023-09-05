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
  },
};
