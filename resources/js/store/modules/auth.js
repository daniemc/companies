import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

//state
export const state = {
    user: null,
    token: Cookies.get('token'),
}

//actions
export const actions = {
    logout({ commit }) {
        commit(types.LOGOUT)
    }
}

//mutations
export const mutations = {
    [types.LOGOUT] (state) {
        state.user = null
    }
}

//getters
export const getters = {
    authCheck: state => state.user !== null
}
