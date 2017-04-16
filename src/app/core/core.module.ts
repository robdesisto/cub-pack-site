import {NgModule, Optional, SkipSelf} from '@angular/core';
import {DataService} from './services/DataService';
import {ContentfulService} from './services/ContentfulService';

// Almost all services should be here
@NgModule({
    providers: [
        DataService,
        ContentfulService
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.');
        }
    }
}