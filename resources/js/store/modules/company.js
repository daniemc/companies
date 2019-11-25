import axios from 'axios'
import * as types from '../mutation-types'

//state
export const state = {
    companies: [],
    allCompanies: []
}

//actions
export const actions = {
    fetchCompanies({ commit }, { page }) {
        axios.get(`/company?page=${page}`)
            .then(({ data, status }) => {
                if (status === 200) {
                    commit(types.SET_COMPANIES, data)
                }
            })
    },
    fetchAllCompanies({ commit }) {
        axios.get(`/companies`)
            .then(({ data, status }) => {
                if (status === 200) {
                    commit(types.SET_ALL_COMPANIES, data)
                }
            })
    }
}

//mutations
export const mutations = {
    [types.SET_COMPANIES] (state, companies) {
        state.companies = companies
    },
    [types.SET_ALL_COMPANIES] (state, companies) {
        state.allCompanies = companies
    }
}

//getters
export const getters = {
    companies: state => state.companies,
    allCompanies: state => state.allCompanies
}
