import axios from 'axios'
import store from '../store'
import router from '../router'
import i18n from '../plugins/i18n'

import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(request => {
  if (store.getters.authToken) {
    request.headers.common['Authorization'] = `Bearer ${store.getters.authToken}`
  }
  return request
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  const { status } = error.response
  if (status >= 500) {
      Vue.swal({
        showConfirmButton: true,
        title: i18n.t('messages.error'),
        text: i18n.t('messages.app_error'),
        type: 'error',
      })
  }

  if (status === 401 && store.getters.authCheck) {
    store.dispatch('logout')
    router.push({ name: 'login' })
    Vue.swal({
        showConfirmButton: true,
        title: i18n.t('messages.info'),
        text: i18n.t('messages.expired_sesion_text'),
        type: 'info',
    })
  }

  return Promise.reject(error)
})
