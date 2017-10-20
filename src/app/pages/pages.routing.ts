import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '@app/pages/home/home.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
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
export class PagesRoutingModule { }
