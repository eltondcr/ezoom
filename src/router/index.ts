import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/tabs/:id',
    name: 'Tab page',
    component: () => import ('../views/TabPage.vue')
  },
  {
    path: '/detail/:id',
    name: 'PostDetails',
    component: () => import('@/views/DetailPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
