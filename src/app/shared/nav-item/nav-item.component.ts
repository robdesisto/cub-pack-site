import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

import {NavItem} from '@app/core/interfaces/NavItem';

@Component({
    selector: 'app-nav-item',
    templateUrl: 'nav-item.component.html',
    styleUrls: ['nav-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
    @Input() public item: NavItem;
}
