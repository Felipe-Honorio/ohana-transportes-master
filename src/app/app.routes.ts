import { Routes } from '@angular/router';
import { DocumentsComponent } from './features/documents/documents.component';
import { HomeComponent } from './features/home/home.component';
import { DeliveryRoutesComponent } from './features/delivery-routes/delivery-routes.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'ohana',
        loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
        children: [
            {
                path: 'documentos',
                loadComponent: () => import('./features/documents/documents.component').then(m => DocumentsComponent)
            },
            {
                path: 'rotas',
                loadComponent: () => import('./features/delivery-routes/delivery-routes.component').then(m => DeliveryRoutesComponent)
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
