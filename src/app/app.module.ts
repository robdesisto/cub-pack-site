import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// App goodness
import {appRouting} from './app.routing';
import {ErrorComponent} from './error/error.component';
import {NotFoundComponent} from './not-found/not-found.component';

// Feature Modules
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {NewsModule} from '../news/news.module';


// App Level Components
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        SharedModule,
        NewsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        ErrorComponent,
        NotFoundComponent
    ],
    providers: [
        Title
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }