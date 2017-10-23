import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterOutlet, RouterState} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {routerTransition} from '@app/app.animations';
import {NavItem} from '@app/core/interfaces/NavItem';
import {DataService} from '@app/core/services/DataService';
import {FbEvent} from '@app/core/models/FbEvent';
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

    constructor(private dataService: DataService, private constants: ConstantsService) {
        this.navItems = constants.navItems;
        this.fbEvents = this.dataService.events$;
    }

    public getRouterState(outlet: RouterOutlet): RouterState {
        return outlet.activatedRouteData.title;
    }
}
