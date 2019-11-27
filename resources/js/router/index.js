import Vue from 'vue'
import { routes } from './routes'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)


function checkAuth(to, from, next) {
    if (!userIsAuth()) {
        store.dispatch('logout')
        return next({ path: '/login', query: { redirect: to.fullPath } })
    }

    return next()
}

function userIsAuth() {
    return store.getters.authCheck
}

const router = new Router({
    base: process.env.NODE_ENV === 'production' ? '/companies' : '/companies',
    mode: 'history',
    routes: routes.map(route => ({
        name: route.name,
        path: route.path,
        component: route.component,
        beforeEnter: (to, from, next) => {
            if (to.name === 'login' && userIsAuth()) {
                return next({ path: '/home' })
            }
            store.dispatch('setLayout', route.layout)
            return route.isPublic ? next() : checkAuth(to, from, next)
        }
    }))
})

export default router
