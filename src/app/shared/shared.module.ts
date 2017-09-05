import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SectionMenuComponent} from './section-menu/section-menu.component';
import {PageContentComponent} from './page-content/page-content.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PageContentComponent,
        SectionMenuComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        PageContentComponent,
        SectionMenuComponent
    ],
    providers: []
})
export class SharedModule { }
