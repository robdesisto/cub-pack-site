import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module';
import {CharterRoutingModule} from '@app/charter/charter.routing';
import {CharterComponent} from '@app/charter/charter.component';

@NgModule({
    imports: [
        SharedModule,
        CharterRoutingModule
    ],
    declarations: [
        CharterComponent
    ]
})
export class CharterModule { }
