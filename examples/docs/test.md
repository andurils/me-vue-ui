# 测试组件

测试组件是用来测试 md 文档是否能在项目中像 vue 文件一样正常展示代码运行结果

运行结果如下 <zm-test bgColor="red"></zm-test>

<el-button>默认按钮</el-button>

<el-button type="primary" disabled>主要按钮</el-button>

<el-button type="success" disabled>成功按钮</el-button>

<el-button type="info" disabled>信息按钮</el-button> <el-button type="warning" disabled>警告按钮</el-button> <el-button type="danger" disabled>危险按钮</el-button>

:::demo ### 描述标题

```html
<template>
  <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
</template>
<script>
  console.log(1);
</script>
```

:::

:::demo ### 描述标题

```html
<template>
  <el-input-number
    v-model="num"
    @change="handleChange"
    :min="1"
    :max="10"
    label="描述文字"
  ></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::
