import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {FacebookService, InitParams} from 'ngx-facebook';

import {FbEvent} from '../models/FbEvent';

// HACK: move out of here
import {buildVars} from './build-vars';

@Injectable()
export class DataService {

    private _events: FbEvent[];
    private _events$: BehaviorSubject<FbEvent[]>;

    constructor(private fb: FacebookService, private http: HttpClient) {
        this._events$ = new BehaviorSubject<FbEvent[]>(null);
        this.loadEvents();
    }

    get events$(): Observable<FbEvent[]> {
        return this._events$.asObservable();
    }

    set events(events: FbEvent[]) {
        const now: number = new Date().valueOf();

        this._events = events.filter((event: FbEvent) => {
            return event.end.valueOf() > now;
        });

        this._events$.next(this._events);
    }

    public loadEvents(): void {
        const initParams: InitParams = {
            appId: buildVars.fbId,
            xfbml: true,
            version: 'v2.10'
        };

        this.fb.init(initParams).then(() => {
            this.fb.api('/pack122/events', 'get', {
                access_token: buildVars.fbToken
            }).then((res: any) => {
               this.events = res.data.map((obj: {[prop: string]: string}) => {
                  return new FbEvent(obj);
               });
            }, (e: any) => {
                console.error(e);
            });
        });
    }
}
