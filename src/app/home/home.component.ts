import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {DataService} from '@app/core/services/DataService';
import {FbPost} from '@app/core/models/FbPost';
import {RouteData} from '@app/core/interfaces/RouteData';

@Component({
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

    public pageData: Observable<RouteData>;
    public posts: Observable<FbPost[]>;

    @HostBinding('class') private readonly classList = 'component-block';

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        this.pageData = this.route.data;
        this.posts = this.dataService.posts$;
    }
}
