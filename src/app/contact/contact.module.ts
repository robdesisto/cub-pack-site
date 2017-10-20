import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module';
import {ContactRoutingModule} from '@app/contact/contact.routing';
import {ContactComponent} from '@app/contact/contact.component';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
