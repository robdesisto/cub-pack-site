import {NavItem} from '../models/NavItem';
import {StaticContent} from '../models/StaticContent';

export class FeatureSection {
    public subNavShowing: boolean = false;
    public sectionMenu: Array<NavItem>;
    public staticContent: StaticContent;

    constructor() {
        this.staticContent = new StaticContent({
            title: 'Welcome to Pack 122',
            section: 'home',
            content: '<p>You have reached the home page of Cub Scout Pack 122 serving Coronado, the Cays, and Imperial Beach. We are currently under construction but anticipate being up by March 1, 2017.</p>'

        });
    }

    toggleSubmenu(): void {
        this.subNavShowing = !this.subNavShowing;
    }
}
