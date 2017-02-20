export class StaticContent {
    private _title: string;
    private _section: string;
    private _content: string;

    constructor(content: any) {
        this._title = content.title;
        this._section = content.section;
        this._content = content.content;
    }

    get title(): string {
        return this._title;
    }

    get section(): string {
        return this._section;
    }

    get content(): string {
        return this._content;
    }
}
