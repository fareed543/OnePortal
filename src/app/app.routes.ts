import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'developer',
    loadChildren: () =>
      import('./developer/developer.module').then(m => m.DeveloperModule)
  },
    {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

