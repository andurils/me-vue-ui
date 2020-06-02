const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/project-name/' : '/', //由于我的项目在github上名为zm-ui,所以我的project-name为zm-ui
  pages: {
    index: {
      entry: "examples/main.js", // js入口文件修改
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 重新设置目录别名
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));
    // 使 examples及packages目录下的js文件都加入编译
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .include.add("/examples")
      .end()
      .use("babel")
      .loader("babel-loader");

    // // 使用vue-markdown-loader
    // config.module.rule("md")
    //   .test(/\.md/)
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .end()
    //   .use("vue-markdown-loader")
    //   .loader("vue-markdown-loader/lib/markdown-compiler")

    // 解析Markdown文件转成vue组件
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "./build/markdown-loader.js"))
      .end();
  },
}
