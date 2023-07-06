import { createApp } from 'vue';
import './style.css';
import store from './store'

import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(router)
.use(store)
.mount('#app');

// Setdefaults(); // Call the function after mounting the app
