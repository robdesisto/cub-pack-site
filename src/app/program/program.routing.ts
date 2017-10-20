import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProgramComponent} from '@app/program/program.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const homeRoutes: Routes = [
    {
        path: '',
        component: ProgramComponent,
        data: {
            title: 'Our Program',
            page: 'program'
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
export class ProgramRoutingModule { }
