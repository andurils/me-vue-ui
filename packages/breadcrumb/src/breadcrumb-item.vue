<template>
  <span class="me-breadcrumb__item">
    <span :class="['me-breadcrumb__inner', to ? 'is-link' : '']" ref="link" role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="me-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="me-breadcrumb__separator" role="presentation">{{ separator }}</span>
  </span>
</template>
<script>
export default {
  name: 'MeBreadcrumbItem',
  props: {
    to: {}, // 路由跳转对象，同 vue-router 的 to  string/object
    replace: Boolean, // 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
  },
  data() {
    return {
      separator: '',
      separatorClass: '',
    };
  },

  inject: ['meBreadcrumb'],

  mounted() {
    this.separator = this.meBreadcrumb.separator;
    this.separatorClass = this.meBreadcrumb.separatorClass;
    const link = this.$refs.link;
    link.setAttribute('role', 'link');
    link.addEventListener('click', (_) => {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    });
  },
};
</script>
