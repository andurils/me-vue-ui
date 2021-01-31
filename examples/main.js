import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 组件引入
import ZmUI from "../packages/index";
Vue.use(ZmUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
