
require('./bootstrap');

window.Vue = require('vue');

import router from './router'
import store from './store'
import App from './components/App'
import './plugins/axios'
import i18n from './plugins/i18n'
import { Form, HasError, AlertError } from 'vform'
window.Form = Form
import PageHeader from './components/commons/PageHeader'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(PageHeader.name, PageHeader)

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    ...App
})
