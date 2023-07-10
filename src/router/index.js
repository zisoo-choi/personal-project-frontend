import Vue from 'vue'
import VueRouter from 'vue-router'

import navigationRoutes from './navigation'
import memberRoutes from './member'

Vue.use(VueRouter)

const routes = [
  ...navigationRoutes,
  ...memberRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
