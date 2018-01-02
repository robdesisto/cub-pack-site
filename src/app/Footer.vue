<template>
    <footer class="text-muted text-center">
        <div class="container">
            <p>&copy; {{year}} {{orgName}} - {{location}}</p>
            <p>
                <a v-for="link in socialLinks" v-bind:href="link.url" target="_blank">
                    <img class="social-icon" v-bind:src="'/assets/social/' + link.name + '.png'" v-bind:alt="link.name"/>
                </a>
            </p>
            <a href="//www.netlify.com">
                <img src="//www.netlify.com/img/global/badges/netlify-dark.svg"/>
            </a>
        </div>
    </footer>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    import {AppConstants} from '@app/store/AppConstants';
    import {SocialLink} from '@app/store/interfaces/SocialLink';

    @Component
    export default class CubFooter extends Vue {
        public year: number = new Date().getFullYear();
        public orgName: string = AppConstants.orgName;
        public location: string = AppConstants.orgLocation;
        public socialLinks: SocialLink[] = AppConstants.socialLinks;
    }
</script>

<style lang="scss" scoped>
    @import '../sass/app.shared';

    footer {
        font-size: $font-size-sm;
        margin-top: 1.5rem;
    }

    .container {
        border-top: 1px solid $fore-border-color;
        padding: 1.5rem 1rem 1rem;
    }

    p {
        margin: 0 0 0.25rem;
    }

    .social-icon {
        height: 1.5rem;
    }
</style>
