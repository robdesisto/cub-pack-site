import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module';
import {PagesRoutingModule} from '@app/pages/pages.routing';
import {HomeComponent} from '@app/pages/home/home.component';

@NgModule({
    imports: [
        SharedModule,
        PagesRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class PagesModule { }
