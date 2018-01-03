import {FbEvent} from '@app/store/models/FbEvent';
import {FbPost} from '@app/store/models/FbPost';
import {PageContent} from '@app/store/models/PageContent';

export interface AppState {
    events: FbEvent[] | null;
    pages: {[page: string]: PageContent} | null;
    posts: FbPost[] | null;
}
