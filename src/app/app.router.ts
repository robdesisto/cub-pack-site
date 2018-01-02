import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';

import Contact from '@app/contact/Contact.vue';
import Home from '@app/home/Home.vue';
import Page from '@app/page/Page.vue';

Vue.use(Router);

const routes: RouteConfig[] = [
    { path: '*', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/page/:id', component: Page, props: true },
    { path: '/connect', component: Contact }
];

export const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior: () => {
        return { x: 0, y: 0 };
    }
});
