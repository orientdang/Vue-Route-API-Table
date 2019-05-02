import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'
import User from './components/User'
import UserDetail from './components/UserDetail'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import NotFound from './components/NotFound';

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/form', name: 'form', components: {
            default: Form,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/table', name: 'table', components: {
            default: Table,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/user', name: 'user', components: {
            default: User,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/login', name: 'login', components: {
            default: Login,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register', name: 'register', components: {
            default: Register,
            'header-top': Header,
            'header-bottom': Footer
        },
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/user/:id', name: 'user-detail', components: {
            default: UserDetail,
            'header-top': Header,
            'header-bottom': Footer
        }, children: [
            { path: 'profile', redirect: { name: 'home' } }
        ],
        meta: {
            requiresAuth: true,
            requiresGuest: false
        }
    },
    {
        path: '/not-found', name: 'notfound', components: {
            default: NotFound,
            'header-top': Header
        }
    },
    { path: '*', redirect: {name: 'notfound'} }
];