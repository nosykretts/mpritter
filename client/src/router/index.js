import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import SigninPage from '@/components/SigninPage'
import SignupPage from '@/components/SignupPage'

Vue.use(Router)

let router = new Router({
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'signin' })
    }
  } else if (to.name === 'signin' && localStorage.getItem('token')) {
    next(false)
  } else {
    next()
  }
})

export default router
