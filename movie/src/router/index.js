import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/homePage/index'
import Login from '../components/login/main'
import Search from '../components/serchPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
