export class FeatureSection {
    public subNavShowing: boolean = false;

    constructor() {

    }

    toggleSubmenu(): void {
        this.subNavShowing = !this.subNavShowing;
    }
}
