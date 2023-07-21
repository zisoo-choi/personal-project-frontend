import Vue from 'vue'
import VueRouter from 'vue-router'

import HopeBookRegisterPage from "@/views/service/HopeBookRegisterPage.vue"
import HopeBookListPage from "@/views/service/HopeBookListPage.vue"

Vue.use(VueRouter)

const serviceRoutes = [
  // {
  //   path: '/hope-book',
  //   name: 'HopeBookPage',
  //   components: {
  //     default: HopeBookPage
  //   },
  //   props: {
  //     default: true
  //   }
  // },
  {
    path: '/hope-register-book',
    name: 'HopeBookRegisterPage',
    component: HopeBookRegisterPage
  },
  {
    path: '/hope-list-book',
    name: 'HopeBookListPage',
    component: HopeBookListPage
  },
]

export default serviceRoutes
