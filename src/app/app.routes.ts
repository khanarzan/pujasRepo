import { Routes } from '@angular/router';
import { FullPageLoginComponent } from './modules/auth/full-page-login/full-page-login.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutRoutes )
    },
    // {
    //     path: 'login',
    //     component: FullPageLoginComponent
    // },
];
