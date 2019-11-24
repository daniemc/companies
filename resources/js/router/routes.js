export const routes = [
    {
        path: '/login',
        name: 'login',
        component: require('./../components/auth/login.vue').default,
        layout: 'defaultLayout',
        isPublic: true,
    },
    {
        path: '/home',
        name: 'home',
        component: require('./../components/home.vue').default,
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/companies',
        name: 'companies',
        component: require('./../components/companies.vue').default,
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/employees',
        name: 'employees',
        component: require('./../components/employees.vue').default,
        layout: 'appLayout',
        isPublic: false,
    },
]
