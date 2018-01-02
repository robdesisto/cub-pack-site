<template>
    <div class="page">
        <cub-page-content v-bind:content="pageContent"></cub-page-content>
        <cub-news-feed v-bind:posts="fbPosts"></cub-news-feed>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {FbPost} from '@app/store/models/FbPost';
    import {PageContent} from '@app/store/models/PageContent';
    import CubNewsFeed from '@app/home/news-feed/NewsFeed.vue'

    @Component({
        components: {CubNewsFeed}
    })
    export default class Home extends Vue {
        get fbPosts(): FbPost[] | null {
            return this.$store.state.posts;
        }

        get pageContent(): PageContent | null {
            return this.$store.getters.pageContent('home');
        }

        constructor($store: any) {
            super($store);

            this.$store.dispatch('loadFbPosts');
        }
    }
</script>
