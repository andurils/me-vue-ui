import Backtop from './src/main';

/* istanbul ignore next */
Backtop.install = function (Vue) {
  Vue.component(Backtop.name, Backtop);
};

export default Backtop;
// TODO:命名没有采用  MeBacktop 样式不渲染
