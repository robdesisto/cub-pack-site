import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'app-footer.component.html',
    styleUrls: ['app-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {
    public today: Date =  new Date();
}
