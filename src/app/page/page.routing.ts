import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageComponent} from '@app/page/page.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const pageRoutes: Routes = [
    {
        path: ':id',
        component: PageComponent,
        resolve: {
            content: PageContentResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pageRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class PageRoutingModule { }
