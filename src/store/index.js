import Vue from 'vue'
import Vuex from 'vuex'

import NavigationModule from './navigation/NavigationModule'
import MemberModule from './member/MemberModule'
import BookModule from './book/BookModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    NavigationModule: NavigationModule,
    MemberModule: MemberModule,
    BookModule: BookModule
  },
})

export default store