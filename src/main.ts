import Vue from 'vue';

import './styles.scss';

import CubApp from '@app/App.vue';
import {router} from '@app/app.router';
import {store} from '@app/store/store';
import '@app/common';

const v = new Vue({
    router,
    store,
    template: '<cub-app/>',
    components: { CubApp }
}).$mount('#app');
