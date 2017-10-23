export class FbEvent {

    private _id: string;
    private _name: string;
    private _description: string;
    private _end: Date;
    private _start: Date;

    constructor(fbObj: {[prop: string]: string}) {
        this._id = fbObj.id;
        this._name = fbObj.name;
        this._description = fbObj.description;
        this._end = fbObj.end_time ? new Date(fbObj.end_time) : null;
        this._start = new Date(fbObj.start_time);
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get end(): Date {
        return this._end;
    }

    get start(): Date {
        return this._start;
    }
}
