<h1 align="center">
  Gesture Password (手势密码)
</h1>

<img height="300" src="https://user-images.githubusercontent.com/11746742/68995608-735b4a00-08ca-11ea-8402-2d5229beaceb.png"></img>

## install

```
// npm
npm install @alitajs/gesture-password-vue --save

// yarn
yarn add @alitajs/gesture-password-vue
```

## Usage as global component

### Vue 3

// main.js

```
import { createApp } from 'vue';
import App from './App.vue';
import GesturePassword from '@alitajs/gesture-password-vue';

const app = createApp(App);

app.use(GesturePassword).mount('#app');
```

// App.vue

```
<template>
  <GesturePassword :width='width' :height='height' @onChange="onChange" />
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      width: 375,
      height: 300,
      onChange: function(data){
        console.log(data) // get gesture password
      }
    });

    return toRefs(state);
  }
};
</script>
```

### Vue 2

// main.js

```
import Vue from 'vue';
import App from './App.vue';
import GesturePassword from '@alitajs/gesture-password-vue';

Vue.use(GesturePassword);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

// App.vue

```
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

## Usage as local component

```
<template>
  <GesturePassword  :width='width' :height='height' @onChange="onChange" />
</template>

<script>
import GesturePassword from '@alitajs/gesture-password-vue';
export default {
  components: {
    GesturePassword
  },
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
