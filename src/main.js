import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/public.css'

Vue.config.productionTip = false;

new Vue({
  router,// ← 使用路由
  store,
  render: h => h(App)
}).$mount('#app');
