import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/member/mutations"
import actions from "@/store/member/actions"
import state from "@/store/member/states"

Vue.use(Vuex)

const MemberModule = {
    namespaced: true,
    state, 
    actions,
    mutations,
}

export default MemberModule