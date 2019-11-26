export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../components/auth/Login'),
        layout: 'defaultLayout',
        isPublic: true,
    },
    {
        path: '/home',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../components/Home'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/companies',
        name: 'companies',
        component: () => import( /* webpackChunkName: "companies" */ '../components/companies/Companies'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import( /* webpackChunkName: "employees" */ '../components/employees/Employees'),
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '*',
        name: 'not_found',
        component: () => import( /* webpackChunkName: "404" */ '../components/commons/404'),
        layout: 'defaultLayout',
        isPublic: true
    }
]
