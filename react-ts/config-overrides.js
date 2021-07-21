const path = require('path');
module.exports = function (config) {
  config.devServer = {
    contentBase: path.join(__dirname, './example'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 3000,
    overlay: false, // 禁止浏览器页面上显示错误, 阻塞进程
    open: true,
    hot: true,
    historyApiFallback: { // 二级路由 页面刷新
      rewrites: [{
        from: /^\/$/,
        to: './index.html',
      }],
    },
    disableHostCheck: true,
  };
  return config;
}