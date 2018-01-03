<template>
    <article v-if="content" class="page-content">
        <h1 class="title">{{content.title}}</h1>
        <div class="cms-content" v-html="content.content"></div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {PageContent} from '@app/store/models/PageContent';

    @Component({
        name: 'CubPageContent'
    })
    export default class CubPageContent extends Vue {
        @Prop() public content: PageContent;
    }
</script>
