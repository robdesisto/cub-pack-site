import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {FbEvent} from '@app/core/models/FbEvent';

@Component({
    selector: 'app-event-list',
    templateUrl: 'event-list.component.html',
    styleUrls: ['event-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent {
    @Input() public events: FbEvent[];

    ngOnChanges() {
        console.log(this.events);
    }
}
