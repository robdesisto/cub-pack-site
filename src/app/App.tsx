import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export class App extends Vue {
    // Initial data can be declared as instance properties
    public message: string = 'Hello!';

    public render() {
        return (
            <div class='app'>{this.message} Foo</div>
        );
    }
}
