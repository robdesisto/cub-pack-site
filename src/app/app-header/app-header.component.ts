import {Component, AfterContentInit, ElementRef} from '@angular/core';
import {NavItem} from '../../core/models/NavItem';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})
export class AppHeaderComponent implements AfterContentInit {
    private static NavItems: Array<NavItem> = [
        new NavItem('home', 'Home'),
        new NavItem('events', 'Events'),
        new NavItem('program', 'Program'),
        new NavItem('resources', 'Resources')
    ];

    private uiNav: HTMLElement;
    private navHeight: number;

    public navShowing: boolean = false;
    public transitioning: boolean = false;
    public navItems: Array<NavItem>;

    constructor(private element: ElementRef) {
        this.navItems = AppHeaderComponent.NavItems.slice(0);
    }

    ngAfterContentInit(): void {
        this.uiNav = this.element.nativeElement.querySelector('.navbar-collapse');
    }

    toggleNav(): void {
        if (this.navShowing) {
            this.closeNav();
        } else {
            this.openNav();
        }
    }

    closeNav(): void {
        this.uiNav.style.height = this.navHeight + 'px';
        this.transitioning = true;

        window.setTimeout(() => {
            this.navShowing = false;
            this.uiNav.removeAttribute('style');

            window.setTimeout(() => {
                this.transitioning = false;
            }, 350);
        });
    }

    openNav(): void {
        this.transitioning = true;

        window.setTimeout(() => {
            this.navShowing = true;

            if (!this.navHeight) {
                this.navHeight = this.uiNav.querySelector('.navbar-nav').clientHeight;
            }

            this.uiNav.style.height = this.navHeight + 'px';

            window.setTimeout(() => {
                this.transitioning = false;
                this.uiNav.removeAttribute('style');
            }, 350);
        });
    }
}

