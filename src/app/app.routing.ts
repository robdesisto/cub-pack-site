import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {ErrorComponent} from '@app/error/error.component';
import {NotFoundComponent} from '@app/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'page', loadChildren: './page/page.module#PageModule'},
    { path: 'connect', loadChildren: './contact/contact.module#ContactModule'},
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            page: 'error'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            page: 'not-found'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
