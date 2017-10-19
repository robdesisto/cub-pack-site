import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
    templateUrl: './error.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
    @HostBinding('class') private readonly classList = 'component-block';
}
