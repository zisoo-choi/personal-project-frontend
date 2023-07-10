import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/navigation/mutations"
import actions from "@/store/navigation/actions"
import state from "@/store/navigation/states"

Vue.use(Vuex)

const NavigationModule = {
    namespaced: true,
    state, 
    actions,
    mutations,
}

export default NavigationModule