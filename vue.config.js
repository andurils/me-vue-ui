const path = require('path');
const VueMarkDownOptions = require('./scripts/vue-markdown-loader.conf');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/me-vue-ui/' : '/',

  // multi-page 模式下构建应用
  pages: {
    // 页面 Index 配置
    index: {
      // page 对应的 JavaScript 入口文件
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  // 对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    // 重新设置目录别名
    config.resolve.alias.set('@', path.resolve('examples')).set('~', path.resolve('packages'));

    // 修改 Loader 选项 使examples及packages目录下的js文件都加入编译
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .include.add('/examples')
      .end()
      .use('babel')
      .loader('babel-loader');

    // 使用vue-markdown-loader
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(VueMarkDownOptions);
  },
};
