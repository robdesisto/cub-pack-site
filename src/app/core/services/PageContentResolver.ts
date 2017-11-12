import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

import {PageContent} from '@app/core/models/PageContent';
import {DataService} from '@app/core/services/DataService';

@Injectable()
export class PageContentResolverService {

    constructor(private router: Router, private dataService: DataService) {}

    protected resolve(route: ActivatedRouteSnapshot): Observable<PageContent> {
        const id = route.params['id'] || route.data['page'];

        return this.dataService.pages$
            .first((data: any) => data !== null)
            .map((data: {[pageId: string]: PageContent}) => {
                let content: PageContent;

                if (data) {
                    content = data[id];
                    return content;
                } else {
                    this.router.navigate(['/error']);
                }
            });
    }
}
