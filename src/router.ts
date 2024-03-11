import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home/Home.vue';
import Resume from './components/Resume/Resume.vue';

const baseRoutes = [
    {
        path: '/home',
        name: 'Home',
        title: 'Home',
        icon: 'fa-tachometer',
        component: Home,
    },
    {
        path: '/resume',
        name: 'Resume',
        title: 'Resume',
        icon: 'fa-tachometer',
        component: Resume,
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/home'
    }
];

// concat additional routes here
const routes = baseRoutes.concat();

export default createRouter({
    history: createWebHistory(),
    routes: routes
});
