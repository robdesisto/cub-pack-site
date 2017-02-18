import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


// TODO: start with your first feature section here
@Component({
    selector: 'news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

    private demoSub: Subscription;

    // public demoCards: Array<CardStub>;

    constructor() {

    }

    // NOTE: On init subscribe to observables
    ngOnInit(): void {
        /*
        this.demoSub = this.demoServiceStub.cards$.subscribe((reports: Map <string, CardStub>) => {
            this.demoCards = Array.from(reports.values());
        }); */
    }

    // NOTE: On destroy unsubscribe to prevent memory leaks
    ngOnDestroy(): void {
        this.demoSub.unsubscribe();
    }
}
