import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs/Subscription';
import {FeatureSection} from '../core/common/FeatureSection';

@Component({
    selector: 'news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.scss']
})
export class NewsComponent extends FeatureSection implements OnInit, OnDestroy {

    private newsSub: Subscription;

    constructor(private title: Title, private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.title.setTitle(this.activatedRoute.snapshot.data.title);
    }

    ngOnDestroy(): void {

    }
}
