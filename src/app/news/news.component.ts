import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FeatureSection} from '../core/common/FeatureSection';

@Component({
    selector: 'news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.scss']
})
export class NewsComponent extends FeatureSection implements OnInit, OnDestroy {

    private newsSub: Subscription;

    constructor() {
        super();
    }

    ngOnInit(): void {
        /*
        this.demoSub = this.demoServiceStub.cards$.subscribe((reports: Map <string, CardStub>) => {
            this.demoCards = Array.from(reports.values());
        }); */
    }

    ngOnDestroy(): void {
        // this.demoSub.unsubscribe();
    }
}
