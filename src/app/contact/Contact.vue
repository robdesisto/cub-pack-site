<template>
    <div class="page">
        The contact page
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    form {
        margin-bottom: 3rem;

        @include media-breakpoint-up(md) {
            margin-bottom: 1rem;
        }
    }

    .controls {
        margin-top: 1rem;
    }
</style>
