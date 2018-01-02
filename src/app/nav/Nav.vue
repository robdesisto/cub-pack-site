<template>
    <nav v-bind:class="{ active: active }">
        <cub-header></cub-header>
        <slot></slot>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import CubHeader from '@app/Header.vue';

    @Component({
        components: {CubHeader}
    })
    export default class CubNav extends Vue {
        @Prop() public active: boolean;
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    nav {
        background-color: $scout-blue;
        bottom: 0;
        min-width: 5vw;
        overflow-y: auto;
        position: absolute;
        top: 0;
        transform: translate3d(-100%, 0, 0);
        transition: transform 0.4s ease;

        width: 280px;
        z-index: 104;

        &.active {
            transform: translate3d(0, 0, 0);
            transition: transform 0.4s ease;
            visibility: visible;
        }
    }

    nav >>> header {
        box-shadow: none;
        padding: 0.3rem 0 0.25rem;
        position: relative;
        top: auto;
    }
</style>
