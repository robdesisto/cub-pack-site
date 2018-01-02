import Vue from 'vue';
import Vuex from 'vuex';

import {AppConstants} from '@app/store/AppConstants';
import {AppState} from '@app/store/interfaces/AppState';
import {navItemGetter} from '@app/store/getters/NavItemGetter';
import {FbEvent} from '@app/store/models/FbEvent';
import {FbPost} from '@app/store/models/FbPost';
import {PageContent} from '@app/store/models/PageContent';

Vue.use(Vuex);

const initialState: AppState = {
    events: null,
    pages: null,
    posts: null
};

export const store = new Vuex.Store({
    state: initialState,
    getters: {
        navItems: navItemGetter
    },
    mutations: {
        setFbEvents: (state: AppState, events: FbEvent[]) => {
            state.events = events;
        },
        setFbPosts: (state: AppState, posts: FbPost[]) => {
            state.posts = posts;
        },
        setPages: (state: AppState, pages: PageContent[]) => {
            const pageMap: {[page: string]: PageContent} = {};

            pages.forEach((page: PageContent) => {
                pageMap[page.name] = page;
            });

            state.pages = pageMap;
        }
    },
    actions: {
        loadFbEvents: (context: any): void => {
            fetch(`${AppConstants.apiUrl}/fb/events`).then((response: any) => {
                return response.json();
            })
            .then((resData: any) => {
                const data = resData.data;
                const events: FbEvent[] = data.length > 0 ? data.map((o: {[p: string]: string}) => new FbEvent(o)) : [];

                context.commit('setFbEvents', events);
            })
            .catch((e: Error) => {
                console.error(e);
            });
        },
        loadFbPosts: (context: any): void => {
            fetch(`${AppConstants.apiUrl}/fb/posts`).then((response: any) => {
                return response.json();
            })
            .then((resData: any) => {
                const data = resData.data;
                const posts: FbPost[] = data.length > 0 ? data.map((o: {[p: string]: string}) => new FbPost(o)) : [];

                context.commit('setFbPosts', posts);
            })
            .catch((e: Error) => {
                console.error(e);
            });
        },
        loadPages: (context: any): void => {
            fetch(`${AppConstants.apiUrl}/cms/pages`).then((response: any) => {
                return response.json();
            })
            .then((data: any) => {
                const pages: PageContent[] = data.items.map((obj: {[prop: string]: string}) => {
                    return new PageContent(obj);
                });

                context.commit('setPages', pages);
            })
            .catch((e: Error) => {
                console.error(e);
            });
        }
    }
});
