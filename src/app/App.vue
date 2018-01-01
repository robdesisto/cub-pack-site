<template>
    <cub-side-nav-container v-bind:active="navActive" v-on:hideNav="hideNav()">
        <cub-side-nav v-bind:active="navActive">
            <cub-nav-item v-for="item in navItems" :key="item.url" v-bind:item="item"></cub-nav-item>
        </cub-side-nav>
        <section class="main">
            <cub-header>
                <i class="navbar-toggler material-icons" @click="showNav()">menu</i>
            </cub-header>
            <div class="content-wrapper container">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-9">
                        <!--<router-outlet></router-outlet>-->
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <!--<app-event-list [events]="fbEvents | async"></app-event-list>-->
                    </div>
                </div>
            </div>
            <cub-footer></cub-footer>
        </section>
    </cub-side-nav-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import CubFooter from '@app/Footer.vue';
import CubHeader from '@app/Header.vue';
import CubNavItem from '@app/side-nav/NavItem.vue';
import CubSideNav from '@app/side-nav/SideNav.vue';
import CubSideNavContainer from '@app/side-nav/SideNavContainer.vue';

import {NavItem} from '@app/core/interfaces/NavItem';

@Component({
    components: {CubFooter, CubHeader, CubSideNavContainer, CubSideNav, CubNavItem}
})
export default class CubApp extends Vue {
    public navActive = false;

    public navItems: NavItem[] = [
        {
            url: 'thing1',
            label: 'Home',
            icon: 'terrain'
        },
        {
            url: 'thing2',
            label: 'About',
            icon: 'info'
        },
        {
            url: 'thing3',
            label: 'Program',
            icon: 'explore'
        },
        {
            url: 'thing4',
            label: 'Volunteer',
            icon: 'pan_tool'
        }
    ];

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
        padding-right: 0;
    }
</style>
