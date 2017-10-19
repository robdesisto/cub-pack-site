import {Component} from '@angular/core';

import {NavItem} from '@app/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public navItems: NavItem[] = [
        {
            url: 'home',
            label: 'Home',
            icon: 'terrain'
        },
        {
            url: 'program',
            label: 'Our Program',
            icon: 'explore'
        },
        {
            url: 'charter',
            label: 'Charter',
            icon: 'group_work'
        },
        {
            url: 'connect',
            label: 'Connect',
            icon: 'feedback'
        }
    ];
}
