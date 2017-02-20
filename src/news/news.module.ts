import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {newsRouting} from './news.routing';
import {NewsComponent} from './news.component';

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