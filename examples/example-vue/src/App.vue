<template>
  <div id="app">
    <GesturePassword :width="width" :height="height" @onChange="onChange" />
  </div>
</template>

<script>
// component register
import GesturePassword from '@alitajs/gesture-password-vue';
export default {
  name: 'app',
  components: {
    GesturePassword
  },
  data() {
    return {
      width: 375,
      height: 300,
      onChange: function(data) {
        console.log(data); // get gesture password
      }
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
