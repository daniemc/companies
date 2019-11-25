import * as types from '../mutation-types'
import axios from 'axios'

export const state = {
    layout: 'defaultLayout',
    lang: 'es'
}

export const actions = {
    setLayout({ commit }, layout) {
        commit(types.SET_LAYOUT, layout)
    },
    updateUserLang({ commit }, lang) {
        commit(types.SET_LANG, lang)
        return axios.post('/user/update/lang', { lang })
    }
}

export const mutations = {
    [types.SET_LAYOUT] (state, layout) {
        state.layout = layout
    },
    [types.SET_LANG] (state, lang) {
        state.lang = lang
        location.reload();
    }
}

export const getters = {
    layout: state => state.layout,
    lang: state => state.lang
}
