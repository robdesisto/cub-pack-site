import {Component, Input, ChangeDetectionStrategy, OnChanges} from '@angular/core';

import {PageContent} from '@app/core/models/PageContent';
import {RouteData} from '@app/core/interfaces/RouteData';

@Component({
    selector: 'app-page-content',
    templateUrl: 'page-content.component.html',
    styleUrls: ['page-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContentComponent implements OnChanges {

    @Input() public data: RouteData;
    public content: PageContent;

    public ngOnChanges(): void {
        if (this.data && this.data.content) {
            this.content = this.data.content;
        }
    }
}
