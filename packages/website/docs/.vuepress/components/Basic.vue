<template>
  <GesturePassword
    :width='width'
    :height='height'
    @onChange="onChange"
  />
</template>

<script>
import GesturePassword from '@alitajs/gesture-password-vue';

export default {
  name: 'Basic',
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
}
</script>
