<template>
    <aside>
        <h4>Upcoming Events</h4>
        <cub-event-item v-for="event in events" :key="event.id" v-bind:event="event"></cub-event-item>
        <p v-if="!events || events.length === 0" class="text-muted">No upcoming events.</p>
    </aside>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import {FbEvent} from '@app/store/models/FbEvent';
    import CubEventItem from '@app/events/EventItem.vue';

    @Component({
        components: {CubEventItem}
    })
    export default class CubEventList extends Vue {
        @Prop() public events: FbEvent[];
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/app.shared';

    h4 {
        border-bottom: 1px solid $fore-border-color;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }

    p {
        font-weight: lighter;
    }
</style>
