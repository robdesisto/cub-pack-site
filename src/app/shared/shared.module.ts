import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {EventListComponent} from '@app/shared/event-list/event-list.component';
import {FbEventComponent} from '@app/shared/event-list/fb-event/fb-event.component';
import {NavItemComponent} from '@app/shared/nav-item/nav-item.component';
import {PageContentComponent} from '@app/shared/page-content/page-content.component';
import {MarkdownPipe} from '@app/shared/pipes/markdown.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        EventListComponent,
        FbEventComponent,
        PageContentComponent,
        NavItemComponent,
        MarkdownPipe
    ],
    exports: [
        CommonModule,
        RouterModule,
        EventListComponent,
        PageContentComponent,
        NavItemComponent,
        MarkdownPipe,
    ]
})
export class SharedModule { }
