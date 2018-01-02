import Vue from 'vue';
import PageContent from './components/PageContent.vue';

export const common = {
    install: (vue: any, options: any) => {
        vue.component(PageContent.name, PageContent);
    }
};

Vue.use(common);
