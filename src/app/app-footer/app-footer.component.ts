import {Component, ChangeDetectionStrategy, HostBinding} from '@angular/core';

import {ConstantsService} from '@app/core/services/ConstantsService';
import {SocialLink} from '@app/core/interfaces/SocialLink';

@Component({
    selector: 'app-footer',
    templateUrl: 'app-footer.component.html',
    styleUrls: ['app-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {

    public today: Date =  new Date();
    public orgName: string;
    public orgLocation: string;
    public socialLinks: SocialLink[];

    @HostBinding('class') private classList = 'container';

    constructor(private constants: ConstantsService) {
        this.orgName = constants.orgName;
        this.orgLocation = constants.orgLocation;
        this.socialLinks = constants.socialLinks;
    }
}
