import {FbEvent} from '@app/core/models/FbEvent';
import {FbPost} from '@app/core/models/FbPost';
import {PageContent} from '@app/core/models/PageContent';

export interface AppState {
    events: FbEvent[] | null;
    pages: {[page: string]: PageContent} | null;
    posts: FbPost[] | null;
}
