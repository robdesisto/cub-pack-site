import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CharterComponent} from '@app/charter/charter.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const homeRoutes: Routes = [
    {
        path: '',
        component: CharterComponent,
        data: {
            title: 'Our Charter',
            page: 'charter'
        },
        resolve: {
            content: PageContentResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class CharterRoutingModule { }
