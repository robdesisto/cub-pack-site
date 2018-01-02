import Vue from 'vue';
import Router from 'vue-router';

import Home from '@app/home/Home.vue';

Vue.use(Router);

const routes = [
    { path: '*', redirect: '/home' },
    { path: '/home', component: Home }
];

export const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior: () => {
        return { x: 0, y: 0 };
    }
});
