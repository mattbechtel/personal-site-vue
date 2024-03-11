import { AboutMe, Education, Home, Projects, Resume } from '@components';
import { createRouter, createWebHistory } from 'vue-router';

const baseRoutes = [
    {
        path: '/home',
        name: 'Home',
        title: 'Home',
        icon: 'fa-tachometer',
        component: Home,
    },
    {
        path: '/projects',
        name: 'Projects',
        title: 'Projects',
        icon: 'fa-tachometer',
        component: Projects,
    },
    {
        path: '/resume',
        name: 'Resume',
        title: 'Resume',
        icon: 'fa-tachometer',
        component: Resume,
    },
    {
        path: '/education',
        name: 'Education',
        title: 'Education',
        icon: 'fa-tachometer',
        component: Education,
    },
    {
        path: '/aboutme',
        name: 'AboutMe',
        title: 'AboutMe',
        icon: 'fa-tachometer',
        component: AboutMe,
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/home',
    },
];

// concat additional routes here
const routes = baseRoutes.concat();

export const Router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
