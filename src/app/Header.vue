<template>
    <header>
        <nav class="navbar">
            <router-link  class="navbar-brand" to ="/home">
                <img class="logo" src="/assets/logo.png"> {{orgName}}
            </router-link>
            <slot></slot>
        </nav>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {AppConstants} from '@app/store/AppConstants';

    @Component
    export default class CubHeader extends Vue {
        public orgName: string = AppConstants.orgName;
    }
</script>

<style lang="scss" scoped>
    @import '../sass/app.shared';

    header {
        display: block;
        background: $scout-blue;
        box-shadow: 0 2px 3px 0 $shadow;
        font-size: 2rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .navbar {
        .navbar-brand {
            color: white;
            font-weight: 400;
            letter-spacing: 0.07rem;
            padding-left: 3.7rem;
            position: relative;

            .logo {
                height: 3rem;
                left: 0;
                position: absolute;
                margin-top: -25px;
                top: 50%;
            }
        }
    }
</style>
