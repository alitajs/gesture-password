
<h1 align="center">
  Gesture Password (手势密码)
</h1>

<img height="300" src="https://user-images.githubusercontent.com/11746742/68995608-735b4a00-08ca-11ea-8402-2d5229beaceb.png"></img>

## gesture-password-vue install

```
// npm
npm install gesture-password-vue --save

// yarn
yarn add gesture-password-vue
```

## gesture-password-vue usage

// main.js registry
```
import Vue from 'vue';
import GesturePassword from 'gesture-password-vue';
 
Vue.use(GesturePassword);

<template>
  <GesturePassword :width='width' :height='height' @onChange="onChange" />
</template>

<script>

export default {
  data() {
    return {
      width: 375,
      height: 300,
      onChange: function(data){
        console.log(data) // get gesture password
      }
    };
  }
};
</script>


```

// Component registry
```
<template>
  <GesturePassword :rowPont='rowPont' :width='width' :height='height' @onChange="onChange" />
</template>

<script>
import GesturePassword from 'gesture-password-vue';
export default {
  components: {
    GesturePassword
  },
  data() {
    return {
       {
        width: 375,
        height: 300,
        onChange: function(data){
          console.log(data) // get gesture password
        }
    };
  }
};
</script>

```

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
