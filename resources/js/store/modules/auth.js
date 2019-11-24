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
    },
    saveToken({ commit }, token) {
        commit(types.SET_TOKEN, token)
    },
    fetchUser({ commit }) {
        return axios.get('/user')
            .then(resp => {
                if (resp.status === 200) {
                    const user = resp.data
                    commit(types.SET_USER, user)
                }
            })
            .catch(err => console.log(err))
    }
}

//mutations
export const mutations = {
    [types.LOGOUT] (state) {
        state.user = null
        state.token = null
        Cookies.remove('token')
    },
    [types.SET_TOKEN] (state, token) {
        state.token = token
        Cookies.set('token', token, { expires: 365 })
    },
    [types.SET_USER] (state, user) {
        state.user = user
    }
}

//getters
export const getters = {
    authCheck: state => state.user !== null,
    authToken: state => state.token,
    authUser: state => state.user
}
