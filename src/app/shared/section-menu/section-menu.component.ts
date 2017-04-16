import {Component, Input} from '@angular/core';
import {NavItem} from '../../core/models/NavItem';

@Component({
    selector: 'section-menu',
    templateUrl: 'section-menu.component.html',
    styleUrls: ['section-menu.component.scss']
})
export class SectionMenuComponent {

    @Input('menu') menu: Array<NavItem>;

    constructor() {

    }
}