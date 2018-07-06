import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Regist from '@/components/Regist'

Vue.use(Router)

export default new Router({
	mode:'history',//可以去掉#	
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Lndex',
      component: Index
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }

  ]
})
