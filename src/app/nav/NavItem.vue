<template>
    <router-link v-bind:to="item.url">
        <i class="icon material-icons">{{item.icon}}</i>
        {{item.label}}
    </router-link>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {NavItem} from '@app/core/interfaces/NavItem';

    @Component
    export default class CubNavItem extends Vue {
        @Prop() public item: NavItem;
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    a {
        border-top: 1px solid $scout-blue-light;
        color: white;
        display: block;
        font-size: $h5-font-size;
        font-weight: 300;
        line-height: 1;
        padding: 0.5rem 1rem 0.8rem;
        text-transform: capitalize;
        transition: all 0.2s;

        &:hover {
            color: $scout-blue-lightest;
            text-decoration: none;
        }

        &.router-link-active {
            background-color: $scout-blue-dark;
            color: $scout-blue-lightest;
        }
    }

    .icon {
        margin-right: 0.5rem;
        position: relative;
        top: 0.25rem;
    }
</style>
