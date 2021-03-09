import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MeUI from '../src/index';
import demoBlock from './components/demo-block';

import '../lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(MeUI);
Vue.component('demo-block', demoBlock);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
