import Vue from 'vue'
import VueRouter from 'vue-router'

import HopeRegisterBookPage from "@/views/service/HopeRegisterBookPage.vue"
import HopeListBookPage from "@/views/service/HopeListBookPage.vue"
import HopeReadBookPage from "@/views/service/HopeReadBookPage.vue"

Vue.use(VueRouter)

const serviceRoutes = [
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
  {
    path: '/hope-read-book/:hopeBookNumber',
    name: 'HopeReadBookPage',
    components: {
      default: HopeReadBookPage
    },
    props: {
      default: true
    }
  },
]

export default serviceRoutes
