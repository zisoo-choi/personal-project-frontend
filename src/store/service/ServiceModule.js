import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/service/mutations"
import actions from "@/store/service/actions"
import state from "@/store/service/states"

Vue.use(Vuex)

const ServiceModule = {
    namespaced: true,
    state, 
    actions,
    mutations,
}

export default ServiceModule