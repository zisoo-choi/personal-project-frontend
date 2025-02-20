import Vue from 'vue'
import VueRouter from 'vue-router'

import SignUpPage from "@/views/member/SignUpPage.vue"
import SignInPage from "@/views/member/SignInPage.vue"
import MyPage from "@/views/member/MyPage.vue"

Vue.use(VueRouter)

const memberRoutes = [
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
      path: '/sign-in',
      name: 'SignInPage',
      component: SignInPage
  },
  {
    path: '/my-Page',
    name: 'MyPage',
    component: MyPage
  },
]

export default memberRoutes
