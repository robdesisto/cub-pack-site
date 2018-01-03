<template>
    <cub-nav-container v-bind:active="navActive" v-on:hideNav="hideNav()">
        <cub-nav v-bind:active="navActive">
            <cub-nav-item v-for="item in navItems" :key="item.url" v-bind:item="item" v-on:hideNav="hideNav()"></cub-nav-item>
        </cub-nav>
        <section class="main">
            <cub-header>
                <i class="navbar-toggler material-icons" @click="showNav()">menu</i>
            </cub-header>
            <div class="content-wrapper container">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-9">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <cub-event-list v-bind:events="fbEvents"></cub-event-list>
                    </div>
                </div>
            </div>
            <cub-footer></cub-footer>
        </section>
    </cub-nav-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import CubEventList from '@app/events/EventList.vue';
import CubFooter from '@app/Footer.vue';
import CubHeader from '@app/Header.vue';
import CubNavItem from '@app/nav/NavItem.vue';
import CubNav from '@app/nav/Nav.vue';
import CubNavContainer from '@app/nav/NavContainer.vue';

import {OnCreated} from '@app/types';
import {NavItem} from '@app/store/interfaces/NavItem';
import {FbEvent} from '@app/store/models/FbEvent';

@Component({
    components: {CubEventList, CubFooter, CubHeader, CubNavContainer, CubNav, CubNavItem}
})
export default class CubApp extends Vue implements OnCreated {

    public navActive = false;

    get navItems(): NavItem[] | null {
        return this.$store.getters.navItems;
    }

    get fbEvents(): FbEvent[] | null {
        return this.$store.state.events;
    }

    public created(): void {
        this.$store.dispatch('loadFbEvents');
        this.$store.dispatch('loadPages');
    }

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
