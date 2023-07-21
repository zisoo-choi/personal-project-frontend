import Vue from 'vue'
import VueRouter from 'vue-router'

import navigationRoutes from './navigation'
import memberRoutes from './member'
import bookRoutes from './book'
import serviceRoutes from './service'

Vue.use(VueRouter)

const routes = [
  ...navigationRoutes,
  ...memberRoutes,
  ...bookRoutes,
  ...serviceRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
