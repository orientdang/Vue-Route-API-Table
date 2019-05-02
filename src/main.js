import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import firebase from 'firebase';
import FirebaseConfig from './components/FirebaseConfig'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false
firebase.initializeApp(FirebaseConfig);
const router = new VueRouter({
  routes,
  mode: 'history'
});
let app;
//  check current user
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});
// Guard
router.beforeEach((to, from, next) => {
  // check requiredAuth guard
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if NOT
    if (!firebase.auth().currentUser) {
      console.log(!firebase.auth().currentUser);
      // go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
})


