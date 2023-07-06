import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import User1 from '../views/AP1/User.vue'
import User2 from '../views/AP2/User.vue'
import Profile from '../views/Profile.vue'

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
{
  path: '/Register',
  name:'Register',
  component: Register,
  meta:{
    RequiresAuth: false
  }
},
{
  path: '/Login',
  name:'Login',
  component: Login,
  meta:{
    RequiresAuth: false
  }
},
//end 
//the pages 
//AP1
{
  path: '/AP1',
  name:'User1',
  component: User1,
  meta:{
    RequiresAuth: false
  }
},
//AP2
{
  path: '/AP2',
  name:'User2',
  component: User2,
  meta:{
    RequiresAuth: false
  }
},
{
  path: '/Profile',
  name:'Profile',
  component: Profile,
  meta:{
    RequiresAuth: false
  }
},

];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;