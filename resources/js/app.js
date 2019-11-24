
require('./bootstrap');

window.Vue = require('vue');

import router from './router'
import store from './store'
import App from './components/App'
import './plugins/axios'
import i18n from './plugins/i18n'

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    ...App
})
