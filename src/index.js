/* Automatically generated by './build/bin/build-entry.js' */

import Test from '../packages/test/index.js';
import Button from '../packages/button/index.js';
import Tooltip from '../packages/tooltip/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Icon from '../packages/icon/index.js';
//import locale from 'element-ui/src/locale';
//import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Test,
  Button,
  Tooltip,
  ButtonGroup,
  Icon,
  // CollapseTransition
];

const install = function (Vue, opts = {}) {
  //locale.use(opts.locale);
  //locale.i18n(opts.i18n);

  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  //Vue.use(InfiniteScroll);
  //Vue.use(Loading.directive);

  Vue.prototype.$ME = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
  };
  /*
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  */
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  //version: '0.1.0',
  //locale: locale.use,
  //i18n: locale.i18n,
  install,
  //CollapseTransition,
  //Loading,
  Test,
  Button,
  Tooltip,
  ButtonGroup,
  Icon,
};
