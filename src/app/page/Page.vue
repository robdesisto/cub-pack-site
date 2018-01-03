<template>
    <div class="page">
        <cub-page-content v-bind:content="pageContent"></cub-page-content>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {PageContent} from '@app/store/models/PageContent';

    import CubPageContent from '@app/common/PageContent.vue';

    @Component({
        components: {CubPageContent}
    })
    export default class Page extends Vue {

        @Prop() public id: string;

        get pageContent(): PageContent | null {
            return  this.id ? this.$store.getters.pageContent(this.id) : null;
        }
    }
</script>
