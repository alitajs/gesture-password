
<h1 align="center">
  Gesture Password (手势密码)
</h1>

<img height="300" src="https://user-images.githubusercontent.com/11746742/68995608-735b4a00-08ca-11ea-8402-2d5229beaceb.png"></img>

## gesture-password-vue install


```
// npm
npm install gesture-password --save

// yarn
yarn add gesture-password
```

## gesture-password-vue usage

// main.js registry
```
import Vue from 'vue'
import GesturePassword from 'gesture-password-vue'
 
Vue.use(GesturePassword)

<template>
  <GesturePassword :rowPont='rowPont' :width='width' :height='height' @onChange="onChange" />
</template>

<script>
export default {
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

// Component registry
```
<template>
  <GesturePassword :rowPont='rowPont' :width='width' :height='height' @onChange="onChange" />
</template>

<script>
import GesturePassword from 'gesture-password-vue'
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