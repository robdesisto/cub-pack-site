import Vue from 'vue';

import './styles.scss';

import CubApp from '@app/App.vue';
import {router} from '@app/app.router';
import {store} from '@app/core/store';
import '@app/common';

const v = new Vue({
    el: '#app',
    router,
    store,
    template: '<cub-app/>',
    components: { CubApp }
});
