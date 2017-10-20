import {Component, ChangeDetectionStrategy} from '@angular/core';

import {ConstantsService} from '@app/core/services/ConstantsService';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {

    public orgName: string;

    constructor(private constants: ConstantsService) {
        this.orgName = constants.orgName;
    }
}

