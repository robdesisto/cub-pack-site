export class PageContent {

    private _id: string;
    private _name: string;
    private _title: string;
    private _content: string;

    constructor(obj: {[prop: string]: any}) {
        this._id = obj.sys.id;
        this._name = obj.fields.name;
        this._title = obj.fields.title;
        this._content = obj.fields.content;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

}
