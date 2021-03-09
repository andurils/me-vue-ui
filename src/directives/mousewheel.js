/**
 * 滚轮事件优化--解决不同浏览器、不同平台的兼容性问题。
 * 事件的滚动信息可能在detail、wheelDelta、wheelDeltaY或wheelDeltaX中，还有side scrolling的问题，以及滚动值单位问题，
 * 该工具库通过normalizeWheel进行了统一处理并对外暴露四个值spinX、spinY、pixelX、pixelY
 *
 */
import normalizeWheel from 'normalize-wheel';

const isFirefox =
  typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const mousewheel = function (element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

export default {
  bind(el, binding) {
    mousewheel(el, binding.value);
  },
};
