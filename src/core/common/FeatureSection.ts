import {NavItem} from '../models/NavItem';
import {StaticContent} from '../models/StaticContent';

export class FeatureSection {
    public subNavShowing: boolean = false;
    public sectionMenu: Array<NavItem>;
    public staticContent: StaticContent;

    constructor() {
        // TODO: this is all junk
        this.sectionMenu = [
            new NavItem('', 'Overview'),
            new NavItem('section1', 'Section 1'),
            new NavItem('section2', 'Section 2')
        ];

        this.staticContent = new StaticContent({
            title: 'Section Header',
            section: 'home',
            content: '<p>This blob <b>here</b> (including the header above it) will be pulled from the CMS. It can be as long as short as necessary. For pages with with multiple sections, we have the sub-menu to the left. We may want some sort of eye-catching, hi-rez image about this stuff, but we\'ll need to sort out permission, etc. </p>'

        });
    }

    toggleSubmenu(): void {
        this.subNavShowing = !this.subNavShowing;
    }
}
