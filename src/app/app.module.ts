import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {AppRoutingModule} from '@app/app.routing';
import {AppComponent} from '@app/app.component';
import {AppHeaderComponent} from '@app/app-header/app-header.component';
import {AppFooterComponent} from '@app/app-footer/app-footer.component';
import {ErrorComponent} from '@app/error/error.component';
import {NotFoundComponent} from '@app/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        ErrorComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        MatSidenavModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
