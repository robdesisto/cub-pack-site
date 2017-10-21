import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '@app/shared/shared.module';
import {ContactRoutingModule} from '@app/contact/contact.routing';
import {ContactComponent} from '@app/contact/contact.component';

@NgModule({
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
