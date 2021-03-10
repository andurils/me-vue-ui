<template>
  <button
    class="me-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'me-button--' + type : '',
      buttonSize ? 'me-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="me-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'MeButton',

  // provide/inject 需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。
  // inject: {
  //   elForm: {
  //     default: '',
  //   },
  //   elFormItem: {
  //     default: '',
  //   },
  // },

  props: {
    //原生button的type
    nativeType: {
      type: String,
      default: 'button',
    },
    //图标类名
    icon: {
      type: String,
      default: '',
    },
    //是否默认聚焦
    autofocus: Boolean,
    /*根据type，size，disabled，loading，plain,round,circle等属性，分别设置了不同的类*/

    //类型  primary / success / warning / danger / info / text
    type: {
      type: String,
      default: 'default',
    },
    size: String, // 尺寸 medium/small/mini
    loading: Boolean, // 是否加载中状态
    disabled: Boolean, // 是否禁用状态
    plain: Boolean, // 是否朴素按钮
    round: Boolean, // 是否圆角按钮
    circle: Boolean, // 是否圆形按钮
  },

  computed: {
    // _elFormItemSize() {
    //   return (this.elFormItem || {}).elFormItemSize;
    // },
    buttonSize() {
      return this.size || (this.$ME || {}).size;
      // return this.size || this._elFormItemSize || (this.$ME || {}).size;
    },
    buttonDisabled() {
      return this.disabled; //|| (this.elForm || {}).disabled;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt); //向父组件发一个click事件
    },
  },
};
</script>
