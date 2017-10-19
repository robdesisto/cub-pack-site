import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from './error/error.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/feature1', pathMatch: 'full' },
    { path: 'feature1', loadChildren: './feature1/feature1.module#Feature1Module'},
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
