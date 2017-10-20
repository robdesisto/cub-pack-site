import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FacebookService} from 'ngx-facebook';

import {DataService} from './services/DataService';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        FacebookService,
        DataService
    ]
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor (
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
