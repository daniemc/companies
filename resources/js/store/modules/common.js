import * as types from '../mutation-types'

export const state = {
    layout: 'defaultLayout'
}

export const actions = {
    setLayout({ commit }, layout) {
        commit(types.SET_LAYOUT, layout)
    }
}

export const mutations = {
    [types.SET_LAYOUT] (state, layout) {
        state.layout = layout
    }
}

export const getters = {
    layout: state => state.layout
}
