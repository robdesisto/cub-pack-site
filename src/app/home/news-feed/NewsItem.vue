<template>
    <div class="news-item">
        <h5 class="post-title">{{post.created | mediumDate}}</h5>
        <div class="post-content">
            <p>{{post.message}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {FbPost} from '@app/store/models/FbPost';

    @Component
    export default class CubNewsItem extends Vue {
        @Prop() public post: FbPost;
    }
</script>

<style lang="scss" scoped>
    @import '../../../sass/app.shared';

    .news-item {
        display: block;
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .post-title {
        color: $scout-blue;
        margin-bottom: 0.5rem;
    }
</style>
