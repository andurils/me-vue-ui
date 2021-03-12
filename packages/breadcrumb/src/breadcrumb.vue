<template>
  <div class="me-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeBreadcrumb',

  props: {
    // 分隔符
    separator: {
      type: String,
      default: '/',
    },
    // 图标分隔符 class
    separatorClass: {
      type: String,
      default: '',
    },
  },
  // provide/inject 需要一起使用，
  // 以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。
  provide() {
    return {
      meBreadcrumb: this,
    };
  },

  mounted() {
    const items = this.$el.querySelectorAll('.me-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  },
};
</script>
