export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '~/components/auth/Login.vue'),
        layout: 'defaultLayout',
        isPublic: true,
    },
    {
        path: '/home',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '~/components/Home.vue'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/companies',
        name: 'companies',
        component: () => import( /* webpackChunkName: "companies" */ '~/components/companies/Companies.vue'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import( /* webpackChunkName: "employees" */ '~/components/employees/Employees.vue'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '*',
        name: 'not_found',
        component: () => import( /* webpackChunkName: "404" */ '~/components/commons/404.vue'),
        layout: 'defaultLayout',
        isPublic: true
    }
]
