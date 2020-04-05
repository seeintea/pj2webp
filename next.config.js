const withSass = require('@zeit/next-sass');
const withImage = require('next-images');

module.exports = withSass(withImage({
	webpack(config, {}) {
		config.module.rules.push({
			test: /\.(ttf|eot|woff|woff2)$/,
      use: ['file-loader']
		});
    return config;
  }
}))