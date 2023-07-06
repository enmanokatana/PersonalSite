import { createStore } from 'vuex';
//import axios from "axios";
//import router from "./router/index.js";


const store = createStore({
    state: {
        user:
        {
          id:'1',
          nom: "mouad",
          prenom: "hayaoui",
          email:'mouadhayaoui@gamil.com',
          role:'2',

        },
    },
    getters: {},
    mutations: {},
    actions:{},



});


export default store;