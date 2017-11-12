import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RouteData} from '@app/core/interfaces/RouteData';

@Component({
    template: '<app-page-content [data]="pageData | async"></app-page-content>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {

    public pageData: Observable<RouteData>;

    @HostBinding('class') private readonly classList = 'component-block';

    constructor(private route: ActivatedRoute) {
        this.pageData = this.route.data;
    }
}
