<template>
    <div class="news-feed">
        <h2>News and Updates</h2>
        <cub-news-item v-for="post in posts" :key="post.id" v-bind:post="post"></cub-news-item>
        <p v-if="!posts || posts.length === 0" class="text-muted">No recent news.</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {FbPost} from '@app/store/models/FbPost';
    import CubNewsItem from '@app/home/news-feed/NewsItem.vue';

    @Component({
        components: {CubNewsItem}
    })
    export default class CubNewsFeedList extends Vue {
        @Prop() public posts: FbPost[];
    }
</script>
