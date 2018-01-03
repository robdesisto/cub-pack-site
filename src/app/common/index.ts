import Vue from 'vue';

import PageContent from './components/PageContent.vue';

Vue.component(PageContent.name, PageContent);

/* Filters */
export * from './filters/mediumDate.filter';
