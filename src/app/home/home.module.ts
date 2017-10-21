import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module';
import {HomeRoutingModule} from '@app/home/home.routing';
import {HomeComponent} from '@app/home/home.component';
import {NewsFeedComponent} from '@app/home/news-feed/news-feed.component';
import {FbPostComponent} from '@app/home/news-feed/fb-post/fb-post.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        NewsFeedComponent,
        FbPostComponent
    ]
})
export class HomeModule { }
