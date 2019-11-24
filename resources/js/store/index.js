import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const requiredModules = require.context('./modules', false, /.*\.js$/)

//load modules dynamically
const modules = requiredModules
    .keys()
    .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), requiredModules(file)])
    .reduce((modules, [name, module]) => {
        modules[name] = module
        return modules
    }, {})

export default new Vuex.Store({
    strict: true,
    modules,
    plugins: [createPersistedState({ storage: window.localStorage })]
})
