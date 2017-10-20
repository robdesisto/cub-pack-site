import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavItemComponent} from './nav-item/nav-item.component';
import {EventListComponent} from './event-list/event-list.component';
import {FbEventComponent} from './event-list/fb-event/fb-event.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        EventListComponent,
        FbEventComponent,
        NavItemComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        EventListComponent,
        NavItemComponent
    ]
})
export class SharedModule { }
