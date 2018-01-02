<template>
    <div class="page">
        <cub-page-content v-bind:content="pageContent"></cub-page-content>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {PageContent} from '@app/store/models/PageContent';

    @Component
    export default class Page extends Vue {
        get pageContent(): PageContent | null {
            return this.$store.getters.pageContent('about');
        }

        constructor($store: any) {
            super($store);
        }
    }
</script>
