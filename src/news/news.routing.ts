import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NewsComponent} from './news.component';

const newsRoutes: Routes = [
    {
        path: 'home',
        component: NewsComponent,
        data: {
            title: 'Your first feature area!'
        },
    }
];

export const newsRouting: ModuleWithProviders = RouterModule.forChild(newsRoutes);
