// 常用函数的封装
import Vue from 'vue';
import { isString, isObject } from './types';

const hasOwnProperty = Object.prototype.hasOwnProperty;

// 空函数
export function noop() {}

// 用来判断一个属性是定义在对象本身而不是继承自原型链
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * @function  将一个对象的内容合并到目标对象
 * @description 如果对象具有相同的属性，则后者会覆盖前者的属性值
 * @param to 目标对象
 * @param _from 被合并的对象
 */
function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}

// 数组转对象
export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * 使用foo.bar的方式获取对象中的属性值
 * @param {*} object { aaa: { bbb: { ccc: 123 } } }
 * @param {*} prop "aaa.bbb.ccc"
 */
export const getValueByPath = function (object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

/**
 * 给于一个path路径标识符数组，系统通过对标识符数组对对象内部数据进行访问，直到找到底部
 * @param {*} obj
 * @param {*} path
 * @param {*} strict
 * obj = { region: '',  delivery: false  }
 * path = 'delivery';
 * 返回值  {"o":{"region":"","delivery":false},"k":"delivery","v":false}
 */

export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj, // 原数组对象
    k: keyArr[i], //属性key
    v: tempObj ? tempObj[keyArr[i]] : null, //属性value
  };
}
// 生成一个随机的ID 基于random
export const generateId = function () {
  return Math.floor(Math.random() * 10000);
};

// 判断对象是否值相等
export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
// 转义正则特殊字符
// escapeRegexpString('[lodash](https://lodash.com/)')  返回  '[lodash](https://lodash.com/)'

export const escapeRegexpString = (value = '') =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
export const arrayFindIndex = function (arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

export const arrayFind = function (arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
export const coerceTruthyValueToArray = function (val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

// 浏览器特性/UA判断
export const isIE = function () {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
};

export const isEdge = function () {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

export const isFirefox = function () {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

// 自动添加前缀 ms-/webkit-
export const autoprefixer = function (style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach((rule) => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach((prefix) => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

/**
 * @description 驼峰形式转成短横线连接的形式
 * @description abCd => ab-cd
 * @param str
 */
export const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

// 字符串首字母大写
export const capitalize = function (str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// 比较两个对象是否相等
// if they are plain objects, do they have the same shape?
export const looseEqual = function (a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    //如果a,b不为空且都是对象
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

export const arrayEquals = function (arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

export const isEqual = function (value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};
// 动画节流
export function rafThrottle(fn) {
  let locked = false;
  return function (...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame((_) => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

export function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}
