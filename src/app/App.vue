<template>
    <section class="main">
        <!--<app-header>-->
            <!--<i class="navbar-toggler material-icons" (click)="sidenav.open()">menu</i>-->
        <!--</app-header>-->
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
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import CubFooter from '@app/Footer.vue';

@Component({
    components: {CubFooter}
})
export default class CubApp extends Vue {
    public message = 'Hello!';
}
</script>

<style lang="scss" scoped>
    @import "../sass/app.shared";

    span {
        color: $scout-red;
    }
</style>
