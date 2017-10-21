import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {FbPost} from '@app/core/models/FbPost';

@Component({
    selector: 'app-news-feed',
    templateUrl: 'news-feed.component.html',
    styleUrls: ['news-feed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent {
    @Input() public posts: FbPost[];
}
