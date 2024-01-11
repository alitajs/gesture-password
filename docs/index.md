# 快速开始

> 美观好用的手势密码组件

## 特性

- 💻 使用 TypeScript 编写，提供完善的类型定义
- 🚀 小巧，不到10K大小，Gzip压缩后不到3K
- 📦 提供cjs、es、umd三种格式
- 🎉 提供Vue、React组件包

## 安装

```
# 原生
yarn add @alitajs/gesture-password

# react
yarn add @alitajs/gesture-password-react

# vue
yarn add @alitajs/gesture-password-vue
```

## 使用 (以React封装为例)

```
import React from 'react';
import GesturePassword from '@alitajs/gesture-password-react';

export default () => {
  return (
    <GesturePassword width={200} height={200} />
  )
}
```

## API

| 参数          | 说明          | 类型                 | 默认值 | 版本 |
| ------------ | --------------| ------------------- | ------ | ---- |
| width        | 绘图的宽度，移动端会自动适配      | `number`     | --     | --   |
| height       | 绘图的高度，移动端会自动适配      | `number`     | --     | --   |
| background   | 背景颜色 | `string`           | `#fff` | --   |
| lineColor     | 图表的绘制线的颜色        | `string`            |  `#0089FF`   | --   |
| lineBackground | 图表的选中圆的背景颜色        | `string`            | `#D9EDFF`    | --   |
| rowPont | 一行有几个圆点        | `number`            | `3`    | --   |
| colPont | 一列有几个圆点        | `number`            | `3`    | --   |
| onChange | 手势改变时的回调        | `(data) => void`            | --    | --   |
| onCustomizeDraw | 自定义绘制手势Canvas UI的回调        | `(obj: object) => void`            | --    |  `1.0.7`  |
| lineWidth | 线条宽度        | `number`  | `1px`   |  `1.0.9`  |
| hd | 是否需要高清方案        | `boolean`  | --    |  `1.0.9`  |
| value | 用于图形回显示        | `number []`  | --    |  `1.0.9`  |
| disable | 是否不可编辑，大概率和图形回显组合使用   | `boolean`  | --    |  `1.0.9`  |
