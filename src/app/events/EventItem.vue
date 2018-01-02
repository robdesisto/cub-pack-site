<template>
    <div class="event-item">
        <h5 class="event-name">
            {{event.name}}
            <em class="date">
                {{event.start | mediumDate}}
            </em>
        </h5>
        <div class="event-details">
            <p class="description">{{event.description}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {FbEvent} from '@app/store/models/FbEvent';

    @Component
    export default class CubEventItem extends Vue {
        @Prop() public event: FbEvent;
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    .event-item {
        margin-bottom: 2rem;
    }

    .event-name {
        color: $scout-blue;
        font-weight: 400;
        margin-bottom: 0.5rem;

        .date {
            color: $sea-blue-light;
            display: block;
            font-size: $font-size-sm;
            font-weight: 300;
            margin-top: 0.25rem;
        }
    }

    .event-details {
        font-size: $font-size-sm;
    }

    .description {
        clear: both;
        color: $gray-light;
        font-weight: lighter;
    }
</style>
