import axios from 'axios'
import store from '../store'
import router from '../router'

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
    alert('Error en la aplicacion')
  }

  if (status === 401 && store.getters.authCheck) {
    alert('Sesion expirada')
    .then(async () => {
      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})
