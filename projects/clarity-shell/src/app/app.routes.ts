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
        loadComponent: () => loadRemoteModule('clarity', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'ag-grid',
        loadComponent: () => loadRemoteModule('agGrid', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'ng-material',
        loadComponent: () => loadRemoteModule('ngMaterial', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'kendo-ui',
        loadComponent: () => loadRemoteModule('kendoUI', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'ng-bootstrap',
        loadComponent: () => loadRemoteModule('ngBootstrap', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'ng-zorro',
        loadComponent: () => loadRemoteModule('ngZorro', './Component').then(m=>m.AppComponent)
    },
    {
        path: 'prime-ng',
        loadComponent: () => loadRemoteModule('primeNG', './Component').then(m=>m.AppComponent)
    }
];
