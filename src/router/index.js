import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '',
        name: 'HelloWorld',
        component: () => import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld.vue')
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
        path: '/contact',
        name: 'contact',
       
        component: () => import(/* webpackChunkName: "Store" */ '../views/contact.vue')
      },
      {
        path: '/cart',
        name: 'cart',
       
        component: () => import(/* webpackChunkName: "Store" */ '../views/cart.vue')
      },
      {
        path: '/productpage:id',
        name: 'productpage',
        component: () => import(/* webpackChunkName: "productpage" */ '../components/productpage.vue'),
        
      }

    ]
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
   
    component: () => import(/* webpackChunkName: "Register" */ '../views/auth/Register.vue')
  },
  {
    path: '/panel',
    name: 'panel',
    component: () => import(/* webpackChunkName: "panel" */ '../adminpanel/Panel.vue'),
    children:[
      {
        path: '/Productlist',
        name: 'Productlist',
       
        component: () => import(/* webpackChunkName: "Productlist" */ '../adminpanel/products/Productlist.vue')
      },
      {
        path: '/AddProduct',
        name: 'AddProduct',
       
        component: () => import(/* webpackChunkName: "AddProduct" */ '../adminpanel/products/AddProduct.vue')
      },
      {
        path: '/users',
        name: 'users',
       
        component: () => import(/* webpackChunkName: "AddProduct" */ '../adminpanel/users/users.vue')
      },
      {
        path: '/map',
        name: 'map',
       
        component: () => import(/* webpackChunkName: "map" */ '../adminpanel/map/map.vue')
      },
    ]
  },
]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
