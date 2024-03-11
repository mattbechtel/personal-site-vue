import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';

import { App, Router } from './App';
import './style.scss';

const app = createApp(App);

app.use(Router);
app.mount('#app');
