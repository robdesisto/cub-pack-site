import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavItemComponent} from './nav-item/nav-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavItemComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        NavItemComponent
    ]
})
export class SharedModule { }
