---
home: true
actionText: 文档
actionLink: /guide/
footer: MIT Licensed | Copyright © 2019 Alitajs
---

## 特性

- 💻 使用 TypeScript 编写，提供完善的类型定义
- 🚀 小巧，不到10K大小，Gzip压缩后不到3K
- 📦 提供`cjs`、`es`、`umd`三种格式

## 安装

```
// npm
npm install gesture-password --save

// yarn 推荐
yarn add gesture-password
```

## 使用

```
import GesturePassword from 'gesture-password';

const config = {
  id: 'gesture',
  width: 375,
  height: 300,
  onChange: (data) => console.log(data) // get gesture password
}

const gesturePassword = new GesturePassword(config)

<canvas id='gesture' />
```
