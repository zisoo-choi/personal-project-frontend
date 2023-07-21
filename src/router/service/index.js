import Vue from 'vue'
import VueRouter from 'vue-router'

import HopeRegisterBookPage from "@/views/service/HopeRegisterBookPage.vue"
import HopeListBookPage from "@/views/service/HopeListBookPage.vue"

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
    name: 'HopeRegisterBookPage',
    component: HopeRegisterBookPage
  },
  {
    path: '/hope-list-book',
    name: 'HopeListBookPage',
    component: HopeListBookPage
  },
]

export default serviceRoutes
