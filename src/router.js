import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/personal/Personal.vue')
    },
    {
      path: '/furniture',
      name: 'furniture',
      component: () => import('./views/furniture/Furniture.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/address/Address.vue')
    }
  ]
})
