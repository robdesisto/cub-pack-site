import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
    @HostBinding('class') private readonly classList = 'component-block';
}
