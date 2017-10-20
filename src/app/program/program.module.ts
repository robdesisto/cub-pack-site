import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module';
import {ProgramRoutingModule} from '@app/program/program.routing';
import {ProgramComponent} from '@app/program/program.component';

@NgModule({
    imports: [
        SharedModule,
        ProgramRoutingModule
    ],
    declarations: [
        ProgramComponent
    ]
})
export class ProgramModule { }
