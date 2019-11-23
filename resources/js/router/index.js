import Vue from 'vue'
import { routes } from './routes'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
    base: 'companies',
    routes,
    mode: 'history'
})

export default router
