import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import {SharedModule} from '@app/shared/shared.module';
import {ContactRoutingModule} from '@app/contact/contact.routing';
import {ContactComponent} from '@app/contact/contact.component';
import {ContactService} from '@app/contact/services/ContactService';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        ContactRoutingModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        ContactComponent
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule { }
