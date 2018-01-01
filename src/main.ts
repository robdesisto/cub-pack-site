import Vue from 'vue';

import CubApp from '@app/App.vue';

const v = new Vue({
    el: '#app',
    template: '<cub-app/>',
    components: { CubApp }
});
