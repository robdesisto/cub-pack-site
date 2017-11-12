import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {routerTransition} from '@app/app.animations';
import {NavItem} from '@app/core/interfaces/NavItem';
import {DataService} from '@app/core/services/DataService';
import {FbEvent} from '@app/core/models/FbEvent';
import {PageContent} from '@app/core/models/PageContent';
import {ConstantsService} from '@app/core/services/ConstantsService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routerTransition],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public navItems: NavItem[];

    public fbEvents: Observable<FbEvent[]>;

    private _routerState: string;

    constructor(private dataService: DataService, private constants: ConstantsService, private router: Router) {
        this.fbEvents = this.dataService.events$;

        this.dataService.pages$.subscribe((pages: {[pageId: string]: PageContent}) => {
            if (pages) {
                this.navItems = this.formatNavItems(pages);
            }
        });

        this.router.events.subscribe((e: Event) => {
            if (e instanceof NavigationEnd) {
                this._routerState = this.router.routerState.snapshot.url;
            }
        });
    }

    // TODO: this is not quite working correctly, a custom re-use strategy on the page component should fix it.
    public getRouterState(): string {
        return this._routerState;
    }

    private formatNavItems(pages: {[pageId: string]: PageContent}): NavItem[] {
        const navItems: NavItem[] = [];

        this.constants.pinnedPages.forEach((pageId: string) => {
            navItems.push({
                url: pageId,
                label: pageId,
                icon: pages[pageId].icon
            });
        });

        Object.keys(pages).sort().forEach((pageId: string) => {
            if (this.constants.pinnedPages.indexOf(pageId) === -1 && this.constants.anchoredPages.indexOf(pageId)) {
                navItems.push({
                    url: `page/${pageId}`,
                    label: pageId,
                    icon: pages[pageId].icon
                });
            }
        });

        this.constants.anchoredPages.forEach((pageId: string) => {
            navItems.push({
                url: pageId,
                label: pageId,
                icon: pages[pageId].icon
            });
        });

        return navItems;
    }
}
