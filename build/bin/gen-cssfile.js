/*生成入口文件
 *theme-gondor 字体文件，scss相关变量、mixin及公共样式设置，各UI组件对应的scss文件
 *gen-cssfile根据components.json获取组件名，找到packages/theme-gondor对应的各组件的scss文件信息
 */
var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = ['theme-gondor'];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// base.scss 默认文件
themes.forEach((theme) => {
  var isSCSS = theme !== 'theme-default';
  var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
  Components.forEach(function (key) {
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    var fileName = key + (isSCSS ? '.scss' : '.css');
    indexContent += '@import "./' + fileName + '";\n';
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  fs.writeFileSync(
    path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'),
    indexContent,
  );
});
