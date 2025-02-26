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
        path: 'clarity',
        loadComponent: () => loadRemoteModule('clarity', './Component')
    },
    {
        path: 'ag-grid',
        loadComponent: () => loadRemoteModule('agGrid', './Component')
    },
    {
        path: 'ng-material',
        loadComponent: () => loadRemoteModule('ngMaterial', './Component')
    },
    {
        path: 'kendo-ui',
        loadComponent: () => loadRemoteModule('kendoUI', './Component')
    },
    {
        path: 'ng-bootstrap',
        loadComponent: () => loadRemoteModule('ngBootstrap', './Component')
    },
    {
        path: 'ng-zorro',
        loadComponent: () => loadRemoteModule('ngZorro', './Component')
    },
    {
        path: 'prime-ng',
        loadComponent: () => loadRemoteModule('primeNG', './Component')
    }
];
