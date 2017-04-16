import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NewsComponent} from './news.component';

const newsRoutes: Routes = [
    {
        path: '',
        component: NewsComponent,
        data: {
            title: 'Pack 122 News and Updates'
        },
    }
];

export const newsRouting: ModuleWithProviders = RouterModule.forChild(newsRoutes);
