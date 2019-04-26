import Home from './components/Home'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'



export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/form', name: 'form', components: {
            default: Form,
            'header-top': Header
        }
    },
    {
        path: '/table', name: 'table', components: {
            default: Table,
            'header-top': Header
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