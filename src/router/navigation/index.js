import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SearchBookListForm from '@/components/navigation/SearchBookListForm.vue'

Vue.use(VueRouter)

const navigationRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search-book-list',
    name: 'SearchBookListForm',
    component: SearchBookListForm
  },
]

export default navigationRoutes
