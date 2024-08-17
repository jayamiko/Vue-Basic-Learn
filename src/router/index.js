import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/declarative-rendering',
      name: 'declarative rendering',
      component: () => import('../views/DeclarativeView.vue')
    }
  ]
})

export default router
