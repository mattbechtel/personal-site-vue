import { Router } from '@main/routing/Router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';

import App from './App/App.vue';
import './style.scss';

const app = createApp(App);

app.use(Router);
app.mount('#app');
