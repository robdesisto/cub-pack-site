import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '@app/home/home.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home',
            page: 'home'
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
export class HomeRoutingModule { }
