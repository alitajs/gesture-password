---
sidebarDepth: 4
sidebar: auto
---

# 指南

## 安装

```
# gesture-password
yarn add gesture-password

# gesture-password-react
yarn add gesture-password-react

# gesture-password-vue
yarn add gesture-password-vue
```

## API

### width

* 参数类型：`Number`
* 描述：绘图的宽度，移动端会自动适配，请写明 iphone6 下的尺寸即可
* 是否必须: 是
* 默认值：无

### height

* 参数类型：`Number`
* 描述：绘图的高度，移动端会自动适配，请写明 iphone6 下的尺寸即可
* 是否必须: 是
* 默认值：无

### background

* 参数类型：`String`
* 描述：背景颜色
* 是否必须: 否
* 默认值：#FFF

### lineColor

* 参数类型：`String`
* 描述：图表的绘制线的颜色
* 是否必须: 否
* 默认值：#0089FF

### lineBackground

* 参数类型：String
* 描述：图表的选中圆的背景颜色
* 是否必须: 否
* 默认值：#D9EDFF

### rowPont

* 参数类型：Number
* 描述：写明一行有几个圆点
* 是否必须: 否
* 默认值：3

### colPont

* 参数类型：Number
* 描述：写明一列有几个圆点
* 是否必须: 否
* 默认值：3

## 事件

### onChange

* 参数类型：(data) => void
* 描述：手势改变时的回调
* 是否必须: 否
* 默认值：无
