import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/main/main.component'),
        title: 'Efe Clean | Home'
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact-page/contact-page.component'),
        title: 'Efe Clean | contact'
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component')
    }
];
