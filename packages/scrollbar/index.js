import MeScrollbar from './src/main';

/* istanbul ignore next */
MeScrollbar.install = function (Vue) {
  Vue.component(MeScrollbar.name, MeScrollbar);
};

export default MeScrollbar;
