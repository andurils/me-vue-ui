'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
// 把packages/theme-gondor/src 下的各scss文件分别用sass插件处理成css文件并压缩，同样输出到packages/theme-gondor/src/lib目录下
function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cssmin())
    .pipe(dest('./lib'));
}
// 把packages/theme-gondor/src/fonts下的字体文件经过压缩处理，同样输出到packages/theme-gondor/src/lib目录下
function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
