import { RouterModule, Routes } from '@angular/router';

import { ModestoHomeComponent } from './components/home/modesto-home.component';

export const modestoRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ModestoHomeComponent
    }
    //    ...importedRoutesArray,
];
