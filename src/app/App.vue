<template>
    <cub-drawer-container v-bind:active="navActive" v-on:hideNav="hideNav()">
        <section class="main">
            <cub-header>
                <i class="navbar-toggler material-icons" @click="showNav()">menu</i>
            </cub-header>
            <!--<div class="content-wrapper container">-->
                <!--<div class="row">-->
                    <!--<div [@routerTransition]="getRouterState()" class="col-12 col-md-8 col-lg-9">-->
                        <!--<router-outlet></router-outlet>-->
                    <!--</div>-->
                    <!--<div class="col-12 col-md-4 col-lg-3">-->
                        <!--<app-event-list [events]="fbEvents | async"></app-event-list>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <cub-footer></cub-footer>
        </section>
    </cub-drawer-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import CubDrawerContainer from '@app/DrawerContainer.vue';
import CubFooter from '@app/Footer.vue';
import CubHeader from '@app/Header.vue';

@Component({
    components: {CubFooter, CubHeader, CubDrawerContainer}
})
export default class CubApp extends Vue {
    public navActive = false;

    public showNav(): void {
        this.navActive = true;
    }

    public hideNav(): void {
        this.navActive = false;
    }
}
</script>

<style lang="scss" scoped>
    @import '../sass/app.shared';

    .navbar-toggler {
        color: $scout-blue-lightest;
        cursor: pointer;
        font-size: $h1-font-size;
    }
</style>
