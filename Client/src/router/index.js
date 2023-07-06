import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';


const routes = [

    /*The Login/Home /Register Page*/

  {
    path: '/',
    name:'Home',
    component: Home,
    meta:{
      RequiresAuth: false
    }
},
//end 


];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;