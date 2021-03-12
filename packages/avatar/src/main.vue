<script>
export default {
  name: 'MeAvatar',

  props: {
    // 设置头像的大小 number / large / medium / small
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val);
        }
        return typeof val === 'number';
      },
    },
    // 设置头像的形状	circle / square
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val);
      },
    },
    icon: String, // 设置头像的图标类型
    src: String, // 图片头像的资源地址
    alt: String, // 描述图像的替换文本
    srcSet: String, // 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像
    // 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为
    // 回调参数(e: Event)
    error: Function,
    // 当展示类型为图片的时候，设置图片如何适应容器框  fill / contain / cover / none / scale-down
    fit: {
      type: String,
      default: 'cover',
    },
  },

  data() {
    return {
      isImageExist: true,
    };
  },

  computed: {
    avatarClass() {
      const { size, icon, shape } = this;
      let classList = ['me-avatar'];

      if (size && typeof size === 'string') {
        classList.push(`me-avatar--${size}`);
      }

      if (icon) {
        classList.push('me-avatar--icon');
      }

      if (shape) {
        classList.push(`me-avatar--${shape}`);
      }

      return classList.join(' ');
    },
  },

  methods: {
    handleError() {
      const { error } = this;
      const errorFlag = error ? error() : undefined;
      if (errorFlag !== false) {
        this.isImageExist = false;
      }
    },
    renderAvatar() {
      const { icon, src, alt, isImageExist, srcSet, fit } = this;

      if (isImageExist && src) {
        return (
          <img
            src={src}
            onError={this.handleError}
            alt={alt}
            srcSet={srcSet}
            style={{ 'object-fit': fit }}
          />
        );
      }

      if (icon) {
        return <i class={icon} />;
      }

      return this.$slots.default;
    },
  },

  render() {
    const { avatarClass, size } = this;

    const sizeStyle =
      typeof size === 'number'
        ? {
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`,
          }
        : {};

    return (
      <span class={avatarClass} style={sizeStyle}>
        {this.renderAvatar()}
      </span>
    );
  },
};
</script>
