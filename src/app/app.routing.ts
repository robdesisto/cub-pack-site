import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {ErrorComponent} from '@app/error/error.component';
import {NotFoundComponent} from '@app/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'program', loadChildren: './program/program.module#ProgramModule'},
    { path: 'charter', loadChildren: './charter/charter.module#CharterModule'},
    { path: 'connect', loadChildren: './contact/contact.module#ContactModule'},
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
