import Vue from "vue";
import VueRouter from "vue-router";
import navConfig from "./configs/nav";
import langs from "./configs/lang";
import Home from "./views/Home";
import locale from "./locale";
Vue.use(VueRouter);

const routes = [];

langs.forEach(({ lang }) => {
  registerRoute(navConfig[lang], lang);
  routes.push({
    path: `/${lang}`,
    name: `${lang}-home`,
    component: Home,
    meta: {
      title: "Muse-UI",
      name: "home",
      path: "/",
      lang: lang
    }
  });
});

function registerRoute(navs, lang) {
  navs.forEach(nav => {
    if (nav.href) return;
    if (nav.children) {
      registerRoute(nav.children, lang);
    } else {
      routes.push({
        name: `${lang}-${nav.path.substring(1)}`,
        path: `/${lang}${nav.path}`,
        component: () => {
          return import(`./docs/${lang}${nav.path}`);
        },
        meta: {
          title: `Muse-UI ${nav.name}`,
          name: nav.name,
          path: nav.path,
          lang: lang
        }
      });
    }
  });
}

routes.push({
  path: "*",
  redirect: "/" + locale
});

routes.push({
  path: "/test",
  name: "test",
  component: () => import("./docs/test.md")
});

routes.push({
  path: "/button",
  name: "button",
  component: () => import("./docs/button.md")
});

export default new VueRouter({
  mode: "hash",
  base: process.env.NODE_ENV !== "production" ? "/" : "/me-vue-ui",
  routes
});
