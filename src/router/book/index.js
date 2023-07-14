import Vue from 'vue'
import VueRouter from 'vue-router'

import NewBookPage from '@/views/book/NewBookPage.vue'
import HopeBookPage from '@/views/book/HopeBookPage.vue'
import WholeBookPage from '@/views/book/WholeBookPage.vue'

Vue.use(VueRouter)

const bookRoutes = [
  {
    path: '/new-book',
    name: 'NewBookPage',
    component: NewBookPage
  },
  {
    path: '/hope-book',
    name: 'HopeBookPage',
    component: HopeBookPage
  },
  {
    path: '/whole-book',
    name: 'WholeBookPage',
    component: WholeBookPage
  },
]

export default bookRoutes
