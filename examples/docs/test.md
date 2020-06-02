# 测试组件
 
测试组件是用来测试md文档是否能在项目中像vue文件一样正常展示代码运行结果

运行结果如下

<zm-test bgColor="blue"></zm-test>

代码如下

`<zm-test bgColor="red"></zm-test>`

## 基础用法

:::snippet 通过 `colorPicker` 标签初始化按钮。

```html
<template>
  <div>
    <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#ff0000"
    };
  },
  methods: {
    headleChangeColor() {
      console.log("颜色改变");
    }
  }
};
</script>
```

:::


### end