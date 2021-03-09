import Vue from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';
import MeUI from '../src/index';
import demoBlock from './components/demo-block';

import '../lib/theme-gondor/index.css';
import './demo-styles/index.scss';
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';
import 'highlight.js/styles/dracula.css'; //代码高亮样式

Vue.config.productionTip = false;
Vue.use(MeUI);
Vue.component('demo-block', demoBlock);

router.afterEach((route) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  document.title = 'Element';
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
