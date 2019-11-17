# Gesture Password

![image](https://user-images.githubusercontent.com/11746742/68995608-735b4a00-08ca-11ea-8402-2d5229beaceb.png)

```javascript
import React from 'react';
import GesturePassword from 'gesture-password';
export default () => {
  const config = {
    width: 375,
    height: 300,
  };
  return <GesturePassword {...config} />;
};
```

## React 组件

## 参数

### `width`

- 参数类型：Number

- 描述：绘图的宽度，移动端会自动适配，请写明 iphone6 下的尺寸即可

- 默认值：null

### `height`

- 参数类型：Number

- 描述：绘图的高度，移动端会自动适配，请写明 iphone6 下的尺寸即可

- 默认值：null

### `background`

- 参数类型：String

- 描述：图表的背景颜色，可以不传

- 默认值：#FFF

### `lineColor`

- 参数类型：String

- 描述：图表的绘制线的颜色，可以不传

- 默认值：#0089FF

### `lineBackground`

- 参数类型：String

- 描述：图表的选中圆的背景颜色，可以不传

- 默认值：#D9EDFF

### `rowPont`

- 参数类型：Number

- 描述：写明一行有几个圆点，可以不传

- 默认值：3

### `colPont`

- 参数类型：Number

- 描述：写明一列有几个圆点，可以不传

- 默认值：3

## JavaScript 示例

```javascript
import { GesturePassword } from 'gesture-password';
const config = {
  id:'gesture',
  width: 375,
  height: 300,
  onChange: (data: any) => console.log(data),
}
const canvas = new GesturePassword(config)
<canvas id='gesture' />
```

> 请注意 import 的时候的大括号，默认导出的是 React 组件
