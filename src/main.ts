import Vue from 'vue';

import './styles.scss';

import CubApp from '@app/App.vue';
import store from '@app/core/store';
import '@app/common';

const v = new Vue({
    el: '#app',
    store,
    template: '<cub-app/>',
    components: { CubApp }
});
