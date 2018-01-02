<template>
    <div class="page">
        This is the home page.
        <cub-news-feed v-bind:posts="fbPosts"></cub-news-feed>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {FbPost} from '@app/store/models/FbPost';
    import CubNewsFeed from '@app/home/news-feed/NewsFeed.vue'

    @Component({
        components: {CubNewsFeed}
    })
    export default class Home extends Vue {
        get fbPosts(): FbPost[] | null {
            return this.$store.state.posts;
        }

        constructor($store: any) {
            super($store);

            this.$store.dispatch('loadFbPosts');
        }
    }
</script>
