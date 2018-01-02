export class FbPost {

    private _id: string;
    private _story: string;
    private _message: string;
    private _created: Date;

    constructor(fbObj: {[prop: string]: string}) {
        this._id = fbObj.id;
        this._story = fbObj.story;
        this._message = fbObj.message;
        this._created = new Date(fbObj.created_time);
    }

    get id(): string {
        return this._id;
    }

    get story(): string {
        return this._story;
    }

    get message(): string {
        return this._message;
    }

    get created(): Date {
        return this._created;
    }
}
