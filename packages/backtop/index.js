import MeBacktop from './src/main';

/* istanbul ignore next */
MeBacktop.install = function (Vue) {
  Vue.component(MeBacktop.name, MeBacktop);
};

export default MeBacktop;
