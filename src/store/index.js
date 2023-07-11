import Vue from 'vue'
import Vuex from 'vuex'

import NavigationModule from './navigation/NavigationModule'
import MemberModule from './member/MemberModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    NavigationModule: NavigationModule,
    MemberModule: MemberModule
  },
})

export default store