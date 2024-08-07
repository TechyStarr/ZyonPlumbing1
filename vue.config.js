const { defineConfig } = require('@vue/cli-service');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].templateContent = ({ htmlWebpackPlugin }) => `
          <!DOCTYPE html>
          <html lang="">
            <head>
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width,initial-scale=1.0">
              <link rel="icon" href="<%= BASE_URL %>favicon.ico">
              <title>${htmlWebpackPlugin.options.title}</title>
              <base href="/" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
            </head>
            <body class="font-sans">
              <noscript>
                <strong>We're sorry but ${htmlWebpackPlugin.options.title} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
              </noscript>
              <div id="app"></div>
              <!-- built files will be auto injected -->
            </body>
          </html>
        `;
        return args;
      });
  }
});
