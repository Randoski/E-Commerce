import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'flowbite/dist/flowbite.min.js';

createApp(App)
  .use(router)
  .mount('#app');
