import Vue from 'vue';
import App from './App.vue';
// gloabal register
// import GesturePassword from '@alitajs/gesture-password-vue';

// Vue.use(GesturePassword);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
