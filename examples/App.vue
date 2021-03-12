<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    lang() {
      return this.$route.path.split('/')[1] || 'zh-CN';
    },
    isComponent() {
      return /^component-/.test(this.$route.name || '');
    },
  },
  watch: {},
  methods: {},
  mounted() {},
};
</script>
