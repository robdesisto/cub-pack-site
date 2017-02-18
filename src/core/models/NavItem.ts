export class NavItem {
    private _url: string;
    private _label: string;

    constructor(url: string, label: string) {
        this._url = url;
        this._label = label;
    }

    get url(): string {
        return this._url;
    }

    get label(): string {
        return this._label;
    }
}
