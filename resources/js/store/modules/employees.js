import * as types from '../mutation-types'
import axios from 'axios'

//state
export const state = {
    employees: []
}

//actions
export const actions = {
    fetchEmployees({ commit }, { page }) {
        axios.get(`/employee?page=${page}`)
            .then(({ data, status }) => {
                if (status === 200) {
                    commit(types.SET_EMPLOYEES, data)
                }
            })
    }
}

//mutations
export const mutations = {
    [types.SET_EMPLOYEES] (state, employees) {
        state.employees = employees
    }
}

//getters
export const getters = {
    employees: state => state.employees
}
