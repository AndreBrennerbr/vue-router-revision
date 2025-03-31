import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{
        title:'About'
      }
    },
    {
      path: '/projeto/:id',
      name: 'projeto',
      component: () => import('../views/ProjetoView.vue'),
      meta:{
        title:'Projeto'
      }
    },
    {
      path: '/:catchAll(.*)', 
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta:{
        title:'Página Não Encontrada'
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Aplicação Vue';
  }
  next(); 
});


export default router
