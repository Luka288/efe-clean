import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/main/main.component'),
        title: 'Efe Clean | Home'
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found.component')
    }
];
