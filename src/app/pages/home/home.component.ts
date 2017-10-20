import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @HostBinding('class') private readonly classList = 'component-block';
}
