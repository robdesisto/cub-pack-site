<template>
    <div class="main">{{message}} <span>Vue</span></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class App extends Vue {
    // Initial data can be declared as instance properties
    public message: string = 'Hello!';

    // Component methods can be declared as instance methods
    public onClick(): void {
        window.alert(this.message);
    }
}
</script>
<style lang="scss" scoped>
    @import "../sass/app.shared";

    span {
        color: $scout-red;
    }
</style>
