import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from '@app/contact/contact.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent,
        data: {
            page: 'connect'
        },
        resolve: {
            content: PageContentResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ContactRoutingModule { }
