import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/book/mutations"
import actions from "@/store/book/actions"
import state from "@/store/book/states"

Vue.use(Vuex)

const BookModule = {
    namespaced: true,
    state, 
    actions,
    mutations,
}

export default BookModule