import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from '@app/error/error.component';
import {NotFoundComponent} from '@app/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/pages.module#PagesModule'},
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            title: 'Oops.'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'A Scout has lost the path.'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
