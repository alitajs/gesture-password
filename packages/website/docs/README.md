---
home: true
actionText: 指南
actionLink: /guide/
footer: MIT Licensed | Copyright © 2019 Alitajs
---

## 特性

- 💻 使用 TypeScript 编写，提供完善的类型定义
- 🚀 小巧，不到10K大小，Gzip压缩后不到3K
- 📦 提供`cjs`、`es`、`umd`三种格式
- 🎉 提供`Vue`、`React`组件包

## 像数 1, 2, 3 一样容易

```
# 安装
yarn add gesture-password
```

```
// index.js 需要编译
import GesturePassword from 'gesture-password';

const config = {
  id: 'gesture',
  width: 375,
  height: 300,
  onChange: (data) => console.log(data) // get gesture password
}

new GesturePassword(config)

// index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Example</title>
</head>
<body>
  <canvas id='gesture' />
  <script src="./index.js"></script>
</body>
</html>
```
