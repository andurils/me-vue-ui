import MeBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
MeBreadcrumb.install = function (Vue) {
  Vue.component(MeBreadcrumb.name, MeBreadcrumb);
};

export default MeBreadcrumb;
