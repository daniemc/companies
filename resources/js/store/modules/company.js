import axios from 'axios'
import * as types from '../mutation-types'

//state
export const state = {
    companies: []
}

//actions
export const actions = {
    fetchCompanies({ commit }) {
        axios.get('/company')
            .then(({ data, status }) => {
                if (status === 200) {
                    commit(types.SET_COMPANIES, data)
                }
            })
    }
}

//mutations
export const mutations = {
    [types.SET_COMPANIES] (state, companies) {
        state.companies = companies
    }
}

//getters
export const getters = {
    companies: state => state.companies
}
