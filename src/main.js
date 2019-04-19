import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/public.css'

// ↓ ------ 引入 ElementUi 插件 -------
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,// ← 使用路由
    store,
    render: h => h(App)
}).$mount('#app');
