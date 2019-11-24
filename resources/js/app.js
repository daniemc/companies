
require('./bootstrap');

window.Vue = require('vue');

import router from './router'
import store from './store'
import App from './components/App'
import './plugins/axios'

new Vue({
    el: '#app',
    router,
    store,
    ...App
})
