import MeButton from './src/button';

/* istanbul ignore next */
MeButton.install = function (Vue) {
  Vue.component(MeButton.name, MeButton);
};

export default MeButton;
