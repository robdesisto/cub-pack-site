import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from '@app/error/error.component';
import {NotFoundComponent} from '@app/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'error', component: ErrorComponent },
    { path: '**', component: NotFoundComponent }
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
