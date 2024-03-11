import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';

import App from './App.vue';
import Router from './router';
import './style.scss';

const app = createApp(App);

app.use(Router);
app.mount('#app');
