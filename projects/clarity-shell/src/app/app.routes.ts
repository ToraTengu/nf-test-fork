import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'clarityApp',
        loadComponent: () => loadRemoteModule('clarityApp', './Component')
    },
    {
        path: 'agGridApp',
        loadComponent: () => loadRemoteModule('ag-grid-app', './Component')
    },
    {
        path: 'clarityApp',
        loadComponent: () => loadRemoteModule('clarityApp', './Component')
    },
    {
        path: 'clarityApp',
        loadComponent: () => loadRemoteModule('clarityApp', './Component')
    }
];
