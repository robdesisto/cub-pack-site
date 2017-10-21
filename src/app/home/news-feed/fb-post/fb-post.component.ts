import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {FbPost} from '@app/core/models/FbPost';

@Component({
    selector: 'app-fb-post',
    templateUrl: 'fb-post.component.html',
    styleUrls: ['fb-post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbPostComponent {
    @Input() public post: FbPost;
}
