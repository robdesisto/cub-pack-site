import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {FbEvent} from '@app/core/models/FbEvent';

@Component({
    selector: 'app-fb-event',
    templateUrl: 'fb-event.component.html',
    styleUrls: ['fb-event.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbEventComponent {
    @Input() public event: FbEvent;
}

