import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'
import User from './components/User'
import UserDetail from './components/UserDetail'
import Login from './components/Login'
import Register from './components/Register'


export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/form', name: 'form', components: {
            default: Form,
            'header-top': Header
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/table', name: 'table', components: {
            default: Table,
            'header-top': Header
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/user', name: 'user', components: {
            default: User,
            'header-top': Header
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/login', name: 'login', components: {
            default: Login,
            'header-top': Header
        },
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register', name: 'register', components: {
            default: Register,
            'header-top': Header
        },
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/user/:id', name: 'user-detail', components: {
            default: UserDetail,
            'header-top': Header
        }, children: [
            { path: 'profile', redirect: { name: 'home' } }
        ],
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    // {
    //     path: '/user', components: {
    //         default: User,
    //         'header-top': Header,
    //         'header-bottom': Header
    //     }, children: [
    //         { path: '', component: UserStart },
    //         { path: ':id', component: UserDetail },
    //         { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    //     ]
    // },
    // { path: '/redirect-me', redirect: { name: 'home' } },
    // {
    //     path: '/not-found', name: 'notfound', components: {
    //         default: NotFound,
    //         'header-top': Header
    //     }
    // },
    { path: '*', redirect: '/not-found' }
];