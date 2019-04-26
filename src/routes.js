import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'
import Table from './components/Table'
import User from './components/User'
import UserDetail from './components/UserDetail'



export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/form', name: 'form', components: {
            default: Form,
            'header-top': Header,
            'header-bottom': Footer
        }
    },
    {
        path: '/table', name: 'table', components: {
            default: Table,
            'header-top': Header,
            'header-bottom': Footer

        }
    },
    {
        path: '/user', name: 'user', components: {
            default: User,
            'header-top': Header,
            'header-bottom': Footer

        }
    },
    {
        path: '/user/:id', name: 'table-profile', components: {
            default: UserDetail,
            'header-top': Header,
            'header-bottom': Footer

        }, children: [
            { path: 'profile', redirect: { name: 'home' } }
        ]
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