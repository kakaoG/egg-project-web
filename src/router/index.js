import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import AccountList from '@/views/AccountList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account/list',
      name: 'accountList',
      component: AccountList
    },
  ]
})
