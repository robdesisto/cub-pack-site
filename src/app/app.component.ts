import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {NavItem} from '@app/shared/interfaces/NavItem';
import {DataService} from '@app/core/services/DataService';
import {FbEvent} from '@app/core/models/FbEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

    public fbEvents: Observable<FbEvent[]>;

    constructor(private dataService: DataService) {}

    public ngOnInit(): void {
        this.fbEvents = this.dataService.events$;
    }
}
