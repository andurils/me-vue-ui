<template>
  <div class="me-badge">
    <slot></slot>
    <transition name="me-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="me-badge__content"
        :class="[
          'me-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
      >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MeBadge',

  props: {
    value: [String, Number], // 显示值
    max: Number, // 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型
    isDot: Boolean, // 小圆点
    hidden: Boolean, // 隐藏 badge
    // 类型		primary / success / warning / danger / info
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      },
    },
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    },
  },
};
</script>
