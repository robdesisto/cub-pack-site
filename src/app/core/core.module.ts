import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {ConstantsService} from '@app/core/services/ConstantsService';
import {DataService} from '@app/core/services/DataService';
import {PageContentResolverService} from '@app/core/services/PageContentResolver';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        ConstantsService,
        DataService,
        PageContentResolverService
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
