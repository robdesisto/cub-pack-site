<template>
    <div class="drawer-container" v-bind:class="{ active: active }">
        <div class="overlay" @click="hideNav()"></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Emit} from 'vue-property-decorator';

    @Component
    export default class CubDrawerContainer extends Vue {
        @Prop() public active: boolean;
        @Emit('hideNav') hideNav(): void {}
    }
</script>

<style lang="scss" scoped>
    @import '../sass/app.shared';

    .drawer-container {
        height: 100%;
        position: relative;
        width: 100%;
        z-index: 1;

        &.active {
            overflow: hidden;

            .overlay {
                opacity: 0.6;
                transition: opacity 0.3s ease-out, visibility 0.1s;
                visibility: visible;
                z-index: 101;
            }
        }
    }

    .overlay {
        background-color: $scout-blue-darker;
        bottom: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transition: opacity 0.3s ease-out, visibility 0.05s 0.4s;
        top: 0;
        visibility: hidden;
    }
</style>
