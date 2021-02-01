/*!
 * 将demo代码块解析，在 markdown 用demo-block组件包裹
 * 安装npm install markdown-it-container --save-dev
 * 对 options 进行配置完成效果渲染
 */

const md = require("markdown-it")();
const slugify = require("transliteration").slugify; // Universal Unicode to Latin transliteration + slugify module
const striptags = require("./strip-tags");
const hljs = require("highlight.js");
module.exports = {
  raw: true,
  html: true, // 在源码中启用 HTML 标签
  linkify: true, // 将类似 URL 的文本自动转换为链接。
  typographer: true, // 启用一些语言中立的替换 + 引号美化
  langPrefix: "language-", // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
  preventExtract: true, //this loader will automatically extract script and style tags from html token content.If you do not need, you can set this option
  wrapper: 'div class="markdown-body"',
  // 语法高亮 使用完全的包裹器覆盖
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
        // eslint-disable-next-line no-empty
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
  use: [
    // 生成标题锚点
    [
      require("markdown-it-anchor"),
      {
        level: 2, // 若传入数字，代表最少包含的渲染层级；若传入一个数组，则会渲染数组中选定的层级
        slugify: slugify, // 生成有效url的自定义函数 function.
        permalink: true, // 是否在标题旁加入永久链接
        permalinkBefore: true // 将永久链接放在标题的前面.
      }
    ],
    // 使用【markdown-it-container】插件解析【:::demo :::】代码块为vue渲染
    [
      require("markdown-it-container"),
      "demo",
      {
        // 验证代码块为【:::demo :::】才进行渲染
        validate: function(params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },

        render: function(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // 1.获取第一行的内容使用markdown渲染html作为组件的描述
            var demoInfo = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            var description =
              demoInfo && demoInfo.length > 1 ? demoInfo[1] : "";
            var descriptionHTML = description ? md.render(description) : "";

            // 2.获取代码块内的html和js代码
            var content = tokens[idx + 1].content;
            // 移除HTML标签  "script" "style"
            var html = convert(
              striptags.strip(content, ["script", "style"])
            ).replace(/(<[^>]*)=""(?=.*>)/g, "$1");
            // 获取 JS
            var script = striptags.fetch(content, "script");
            // 获取 CSS
            var style = striptags.fetch(content, "style");
            var jsfiddle = { html: html, script: script, style: style };
            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
            return `<demo-block :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
          } else {
            return "</div></demo-block>\n";
          }
        }
      }
    ],
    // 解析【:::tip:::】
    [require("markdown-it-container"), "tip"],
    // 解析【:::warning:::】
    [require("markdown-it-container"), "warning"]
  ]
};

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"),
        16
      )
    );
  });
  return str;
}
