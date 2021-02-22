import ZmTest from './src/test.vue';

// 支持按需引用
ZmTest.install = function(Vue) {
  Vue.component(ZmTest.name, ZmTest);
};

export default ZmTest;
