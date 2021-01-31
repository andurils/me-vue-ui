/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

"use strict";

// cheerio实现了jQuery的一个子集 用在服务器端需要对DOM进行操作的地方
var cheerio = require("cheerio");

// 移除标签
exports.strip = function(str, tags) {
  var $ = cheerio.load(str, { decodeEntities: false });

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  var len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html();
};

// 获取标签
exports.fetch = function(str, tag) {
  var $ = cheerio.load(str, { decodeEntities: false });
  if (!tag) return str;

  return $(tag).html();
};
