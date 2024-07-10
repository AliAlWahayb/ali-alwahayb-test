import { createRouter, createWebHistory } from 'vue-router'

import LogInView from '@/viewes/LogInView.vue'
import HomeView from '@/viewes/HomeView.vue'
import testView from '@/viewes/testView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LogInView',
      component: LogInView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/test',
      name: 'testView',
      component: testView
    }
  ]
})

export default router