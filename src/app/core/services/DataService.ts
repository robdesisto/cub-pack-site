/**
 * To create a permanent FB token see:
 * https://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token
 */
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {FacebookService, InitParams} from 'ngx-facebook';
import * as contentful from 'contentful';

import {PageContent} from '@app/core/models/PageContent';
import {FbEvent} from '@app/core/models/FbEvent';
import {FbPost} from '@app/core/models/FbPost';

import {environment} from '@env/environment';

@Injectable()
export class DataService {

    private _pages: {[page: string]: PageContent};
    private _pages$: BehaviorSubject<{[page: string]: PageContent}>;
    private _posts: FbPost[];
    private _posts$: BehaviorSubject<FbPost[]>;
    private _events: FbEvent[];
    private _events$: BehaviorSubject<FbEvent[]>;
    private contentful: any;

    constructor(private fb: FacebookService) {
        console.log(environment.secureThing);
        // this.contentful = contentful.createClient({
        //     space: buildVars.cSpaceId,
        //     accessToken: buildVars.cToken
        // });
        //
        // this._pages$ = new BehaviorSubject<{[page: string]: PageContent}>(null);
        // this._posts$ = new BehaviorSubject<FbPost[]>(null);
        // this._events$ = new BehaviorSubject<FbEvent[]>(null);
        //
        // this.loadFacebookContent();
        // this.loadCmsContent();
    }

    get pages$(): Observable<{[page: string]: PageContent}> {
        return this._pages$.asObservable();
    }

    set pages(pages: PageContent[]) {
        const pageHash: {[page: string]: PageContent} = {};

        pages.forEach((page: PageContent) => {
            pageHash[page.name] = page;
        });

        this._pages = pageHash;
        this._pages$.next(this._pages);
    }

    get events$(): Observable<FbEvent[]> {
        return this._events$.asObservable();
    }

    set events(events: FbEvent[]) {
        const now: number = new Date().valueOf();

        this._events = events.filter((event: FbEvent) => {
            return event.end.valueOf() > now;
        }).reverse();

        this._events$.next(this._events);
    }

    get posts$(): Observable<FbPost[]> {
        return this._posts$.asObservable();
    }

    set posts(posts: FbPost[]) {
        this._posts = posts.filter((post: FbPost) => {
            return post.message;
        }).slice(0, 10);

        this._posts$.next(this._posts);
    }

    private loadFacebookContent(): void {
        const initParams: InitParams = {
            // appId: buildVars.fbId,
            xfbml: true,
            version: 'v2.10'
        };

        this.fb.init(initParams).then(() => {
            this.loadFacebookEvents();
            this.loadFacebookPosts();
        });
    }

    private loadFacebookEvents(): void {
        this.fb.api('/pack122/events', 'get', {
            // access_token: buildVars.fbToken
        })
            .then((res: any) => {
                if (res.data && res.data.length > 0) {
                    this.events = res.data.map((obj: {[prop: string]: string}) => {
                        return new FbEvent(obj);
                    });
                } else {
                    return [];
                }
            }, (e: any) => {
                console.error(e);
            });
    }

    private loadFacebookPosts(): void {
        this.fb.api('/pack122/posts', 'get', {
            // access_token: buildVars.fbToken
        })
            .then((res: any) => {
                if (res.data && res.data.length > 0) {
                    this.posts = res.data.map((obj: {[prop: string]: string}) => {
                        return new FbPost(obj);
                    });
                } else {
                    return [];
                }
            }, (e: any) => {
                console.error(e);
            });
    }

    private loadCmsContent(): void {
        this.contentful.getEntries()
            .then((res: any) => {
                if (res.items && res.items.length > 0) {
                    this.pages = res.items.map((obj: {[prop: string]: string}) => {
                        return new PageContent(obj);
                    });
                } else {
                    return [];
                }
            }, (e: any) => {
                console.error(e);
            });
    }
}
