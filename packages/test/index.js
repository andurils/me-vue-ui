import MeTest from './src/test.vue';

// 支持按需引用
MeTest.install = function (Vue) {
  Vue.component(MeTest.name, MeTest);
};

export default MeTest;
