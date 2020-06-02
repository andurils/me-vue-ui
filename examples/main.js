import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "highlight.js/styles/color-brewer.css";

// 导入组件库
import ZmUI from '../packages/index'
import ColorPicker from './../packages/index'

import VcSnippet from "./components/snippet";
Vue.component("vc-snippet", VcSnippet);

// 注册组件库
Vue.use(ColorPicker)
Vue.use(ZmUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
