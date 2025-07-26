import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Favorites from '@/views/Favorites.vue'


const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },

    {
      path: '/favorites',
      component: Favorites,
    },
  ],
})

export default router
