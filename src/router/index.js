import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/acessorios',
          name: 'acessorios',
          component: () => import('@/views/Acessorios.vue')
        },
        {
          path: '/categorias',
          name: 'categorias',
          component: () => import('@/views/Categorias.vue')
        },
        {
          path: '/cores',
          name: 'cores',
          component: () => import('@/views/Cores.vue')
        },
        {
          path: '/marcas',
          name: 'marcas',
          component: () => import('@/views/Marcas.vue')
        },
        {
          path: '/veiculos',
          name: 'veiculos',
          component: () => import('@/views/Veiculos.vue')
        },
        {
          path: '/modelos',
          name: 'modelos',
          component: () => import('@/views/Modelos.vue')
        }
      ],
    },
  ]
})

export default router
