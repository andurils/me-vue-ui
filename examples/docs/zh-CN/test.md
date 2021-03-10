:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```html
<me-row>
  <me-col :span="24"><div class="grid-content bg-purple-dark"></div></me-col>
</me-row>

<style>
  .me-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .me-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
