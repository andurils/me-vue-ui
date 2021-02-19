# 测试组件

测试组件是用来测试 md 文档是否能在项目中像 vue 文件一样正常展示代码运行结果

运行结果如下 <zm-test bgColor="red"></zm-test>

<el-button>默认按钮</el-button>

<el-button type="primary" disabled>主要按钮</el-button>

<el-button type="success" disabled>成功按钮</el-button>

<el-button type="info" disabled>信息按钮</el-button> <el-button type="warning" disabled>警告按钮</el-button> <el-button type="danger" disabled>危险按钮</el-button>

:::tip ### 描述标题 tiptip

xxxxxxxxxxx

:::

:::warning ### 描述标题 warningwarning

```html
<template>
  <zm-test bgColor="red"></zm-test>
</template>
<script>
  console.log(1);
</script>
```

:::

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
