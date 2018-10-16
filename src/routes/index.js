// Imports dependencias
import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'

// Imports componentes .vue
import Login from '../app/components/Login.vue'
import Menu from '../app/components/Menu.vue'
import Sesiones from '../app/components/Sesiones.vue'

// Import Firebase
import Firebase from 'firebase'

// Configuracion vue-cookies
VueCookies.config('1d')

// Configuracion vue
Vue.use(Router)
Vue.use(VueCookies)

// Configuracion de rutas
let router = new Router({
  routes: [
    { path: '*', redirect: '/login'},
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'Login', component: Login },
    { path: '/menu', name: 'Menu', component: Menu, meta: { requiresAuth: true }},
    { path: '/registrosesion', name: 'Sesiones', component: Sesiones, meta: { requiresAuth: true }},
  ]
})

// Que ocurre despues de logear correctamente en firebase
router.beforeEach((to, from, next) => {
  let currentUser = Firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('menu')
  else next()

  if(window.closed === true){
    router.replace('login')
  }
})

export default router
