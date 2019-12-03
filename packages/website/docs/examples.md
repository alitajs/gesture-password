---
sidebarDepth: 4
sidebar: auto
---

# 使用示例

## 基本使用

## gesture-password-react

```
import React from 'react';
import GesturePassword from '@alitajs/gesture-password-react';

export default () => {
  const config = {
    width: 375,
    height: 300,
    onChange: (data: any) => console.log(data) // get gesture password
  };

  return <GesturePassword {...config} />;
};
```

## gesture-password-vue

```
// main.js registry

import Vue from 'vue';
import GesturePassword from '@alitajs/gesture-password-vue';

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

```
// Component registry

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
