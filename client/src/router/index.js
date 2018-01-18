import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SigninPage from '@/components/SigninPage'
import SignupPage from '@/components/SignupPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      name: 'signin',
      path: '/auth/signin',
      component: SigninPage
    },
    {
      name: 'signup',
      path: '/auth/signup',
      component: SignupPage
    }
  ]
})
