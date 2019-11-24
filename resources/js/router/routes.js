export const routes = [
    {
        path: '/login',
        name: 'login',
        component: require('./../components/auth/Login.vue').default,
        layout: 'defaultLayout',
        isPublic: true,
    },
    {
        path: '/home',
        name: 'home',
        component: require('./../components/Home.vue').default,
        layout: 'appLayout',
        isPublic: false,
    },
    {
        path: '/companies',
        name: 'companies',
        component: require('./../components/companies/companies.vue').default,
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
