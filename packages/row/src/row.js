export default {
  name: 'MeRow',
  componentName: 'MeRow',
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div',
    },
    gutter: Number, // 栅格间隔
    type: String, // 布局模式，可选 flex，现代浏览器下有效
    // flex 布局下的水平排列方式		start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'start',
    },
    // flex 布局下的垂直排列方式 top/middle/bottom
    align: {
      type: String,
      default: 'top',
    },
  },

  computed: {
    style() {
      const ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    },
  },

  render(h) {
    return h(
      this.tag,
      {
        class: [
          'me-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'me-row--flex': this.type === 'flex' },
        ],
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
