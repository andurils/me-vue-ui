# 测试组件

测试组件是用来测试 md 文档是否能在项目中像 vue 文件一样正常展示代码运行结果

运行结果如下 <me-test bgColor="blue"></me-test>

<me-button>默认按钮</me-button> <me-button type="primary">主要按钮</me-button> <me-button type="success">成功按钮</me-button> <me-button type="info">信息按钮</me-button> <me-button type="warning">警告按钮</me-button> <me-button type="danger">危险按钮</me-button>

<me-button icon="el-icon-search" circle></me-button> <me-button type="primary" icon="el-icon-edit" circle></me-button> <me-button type="success" icon="el-icon-check" circle></me-button> <me-button type="info" icon="el-icon-message" circle></me-button> <me-button type="warning" icon="el-icon-star-off" circle></me-button> <me-button type="danger" icon="el-icon-delete" circle></me-button>

代码如下

```
<me-test bgColor="blue"></me-test>
```

Markdown 标题：

# 这是 H1

## 这是 H2

### 这是 H3

Markdown 列表：

- 列表项目

1. 列表项目

*斜体*或*斜体* **粗体** **_加粗斜体_** ~~删除线~~

Markdown 插入链接： [链接文字](链接网址 '标题')

Markdown 插入代码块： `python #!/usr/bin/python3 print("Hello, World!"); `

Markdown 引用：

> 引用内容

## Markdown 分割线：

Markdown 换行： <br>

Markdown 段首缩进： &ensp; or &#8194; 表示一个半角的空格 &emsp; or &#8195; 表示一个全角的空格 &emsp;&emsp; 两个全角的空格（用的比较多） &nbsp; or &#160; 不断行的空白格
