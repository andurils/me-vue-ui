import MeCol from './src/col';

/* istanbul ignore next */
MeCol.install = function (Vue) {
  Vue.component(MeCol.name, MeCol);
};

export default MeCol;
