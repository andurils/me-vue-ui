/**
 * 当用户鼠标左键一直按住不松手，只会触发一次触发mousedown的回调(加入了定时器);
 * 当鼠标松开，触发一次mouseup回调方法，取消该定时器
 *
 */
import { once, on } from 'me-ui/src/utils/dom';

export default {
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    const handler = () => vnode.context[binding.expression].apply(); // 调用传入的方法
    // 在mouseup回调中，如果发现距离最近一次点击时间小于100ms，就会执行一次handler方法，并清除定时器
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      // mousedown的回调方法（clear方法）每次执行时，都会通过once方法注册并执行一次mouseup回调
      once(document, 'mouseup', clear);
      clearInterval(interval);
      // 如果时间间隔大于100毫秒，那么mousedown的回调方法里的setInterval回调就会执行(handler 传入的方法)
      // 如果时间间隔小于100毫秒，定时器就会取消；
      interval = setInterval(handler, 100);
    });
  },
};
