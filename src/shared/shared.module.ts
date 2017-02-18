import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        // NOTE: shared components, pipes, and maybe services go here
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: []
})
export class SharedModule { } 