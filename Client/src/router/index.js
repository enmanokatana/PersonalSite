import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/about.vue';

const routes = [

    /*The Login/Home /Register Page*/

  {
    path: '/',
    name:'Home',
    component: Home,
    
},
{
  path: '/About',
  name:'About',
  component: About,
  
},

];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;