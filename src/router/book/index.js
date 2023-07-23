import Vue from 'vue'
import VueRouter from 'vue-router'

import NewBookPage from '@/views/book/NewBookPage.vue'
import WholeBookPage from '@/views/book/WholeBookPage.vue'
import ReadBookPage from '@/views/book/ReadBookPage.vue'
import ModifyBookPage from '@/views/book/ModifyBookPage.vue'
import RegisterBookPage from "@/views/book/RegisterBookPage.vue"
import ManagementBookPage  from "@/views/book/manager/ManagementBookPage.vue"
import ManagementRegisterBookPage from "@/views/book/manager/ManagementRegisterBookPage.vue"
import ManagementReadBookPage from "@/views/book/manager/ManagementReadBookPage.vue"
import ManagementModifyBookPage from "@/views/book/manager/ManagementModifyBookPage.vue"

Vue.use(VueRouter)

const bookRoutes = [
  {
    path: '/new-book',
    name: 'NewBookPage',
    component: NewBookPage
  },
  {
    path: '/whole-book',
    name: 'WholeBookPage',
    component: WholeBookPage
  },
  {
    path: '/read-book/:bookNumber',
    name: 'ReadBookPage',
    components: {
      default: ReadBookPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/modify-book/:bookNumber',
    name: 'ModifyBookPage',
    components: {
      default: ModifyBookPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/register-book',
    name: 'RegisterBookPage',
    component: RegisterBookPage
  },
  {
    path: '/management-book',
    name: 'ManagementBookPage',
    component: ManagementBookPage
  },
  {
    path: '/management-register-book',
    name: 'ManagementRegisterBookPage',
    component: ManagementRegisterBookPage
  },
  {
    path: '/management-read-book/:bookNumber',
    name: 'ManagementReadBookPage',
    components: {
      default: ManagementReadBookPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/management-modify-book/:bookNumber',
    name: 'ManagementModifyBookPage',
    components: {
      default: ManagementModifyBookPage
    },
    props: {
      default: true
    }
  },
]

export default bookRoutes
