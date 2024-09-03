import { createRouter, createWebHistory } from 'vue-router';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import LogIn from '../views/LogIn.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Clothes from '../views/Clothes.vue';
import Electronics from '../views/Electronics.vue';
import Furniture from '../views/Furniture.vue';
import Shoes from '../views/Shoes.vue';
import Others from '../views/Others.vue';

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products,
  },

  {
    path: '/product',
    name: 'Product',
    component: Product,
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },

  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
  },

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },

  {
    path: '/clothes',
    name: 'Clothes',
    component: Clothes,
  },

  {
    path: '/electronics',
    name: 'Electronics',
    component: Electronics,
  },


  {
    path: '/furniture',
    name: 'Furniture',
    component: Furniture,
  },

  {
    path: '/shoes',
    name: 'Shoes',
    component: Shoes,
  },

  {
    path: '/others',
    name: 'Others',
    component: Others,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
