import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/views/Game'
import Gift from '@/views/Gift'
import Market from '@/views/Market'
import Forum from '@/views/Forum'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'item-link-active',
  routes: [
    {
      path: '/',
      redirect: '/game'
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
