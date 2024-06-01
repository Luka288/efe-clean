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
        path: 'about-us',
        loadComponent: () => import('./features/about-us/about-us.component'),
        title: 'Efe - Clean | About Us'
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component'),
        title: 'Efe - Clean | 404 Not found'
    }
];
