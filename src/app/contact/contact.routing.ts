import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from '@app/contact/contact.component';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

const homeRoutes: Routes = [
    {
        path: '',
        component: ContactComponent,
        data: {
            title: 'Contact Us',
            page: 'contact'
        },
        resolve: {
            content: PageContentResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ContactRoutingModule { }
