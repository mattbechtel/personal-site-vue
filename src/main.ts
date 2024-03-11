import { App } from '@components';
import { Router } from '@src/routing/Router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';

import './style.scss';

const app = createApp(App);

app.use(Router);
app.mount('#app');
