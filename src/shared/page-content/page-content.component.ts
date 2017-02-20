import {Component, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {StaticContent} from '../../core/models/StaticContent';

@Component({
    selector: 'page-content',
    templateUrl: 'page-content.component.html',
    styleUrls: ['page-content.component.scss']
})
export class PageContentComponent implements OnChanges {

    @Input('content') content: StaticContent;
    public displayContent: any;

    constructor(private domSanitizer: DomSanitizer) {

    }

    ngOnChanges(): void {
        if (this.content && this.content.content) {
            this.displayContent = this.domSanitizer.bypassSecurityTrustHtml(this.content.content);
        }
    }
}
