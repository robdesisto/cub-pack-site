import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

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

    constructor(private http: HttpClient) {
        this._pages$ = new BehaviorSubject<{[page: string]: PageContent}>(null);
        this._posts$ = new BehaviorSubject<FbPost[]>(null);
        this._events$ = new BehaviorSubject<FbEvent[]>(null);

        this.loadFacebookEvents();
        this.loadFacebookPosts();
        this.loadCmsContent();
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
        this._events = events;
        this._events$.next(this._events);
    }

    get posts$(): Observable<FbPost[]> {
        return this._posts$.asObservable();
    }

    set posts(posts: FbPost[]) {
        this._posts = posts;
        this._posts$.next(this._posts);
    }

    private loadFacebookEvents(): void {
        this.http.get(`${environment.apiUrl}/fb/events`)
            .toPromise()
            .then((res: any) => {
                if (res.data.length > 0) {
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
        this.http.get(`${environment.apiUrl}/fb/posts`)
            .toPromise()
            .then((res: any) => {
                if (res.data.length > 0) {
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
        this.http.get(`${environment.apiUrl}/cms/pages`)
            .toPromise()
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
