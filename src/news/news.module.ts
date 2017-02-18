import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {newsRouting} from './news.routing';
import {NewsComponent} from './news.component';

// NOTE: It may be smarter to include the ZuiDashboardModule in the SharedModule pending on how much you're using it
@NgModule({
    imports: [
        SharedModule,
        newsRouting
    ],
    declarations: [
        NewsComponent
    ],
    providers: []
})
export class NewsModule { }