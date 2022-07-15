import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/store',
    name: 'store',
   
    component: () => import(/* webpackChunkName: "Store" */ '../views/Store.vue')
  },
  {
    path: '/productpage',
    name: 'productpage',
    component: () => import(/* webpackChunkName: "productpage" */ '../components/productpage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
