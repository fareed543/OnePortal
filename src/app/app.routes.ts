import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';

export const routes: Routes = [
  // {
  //   path : '',
  //   component : LayoutComponent,
  //   children : [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  //     }
  //   ]
  // },
  {
    path : '',
    component : AuthLayoutComponent,
    children : [
      {
          path: 'login',
          loadChildren: () =>import('./auth/login/login.module').then(m => m.LoginModule)
        },
        {
          path: 'register',
          loadChildren: () =>import('./auth/register/register.module').then(m => m.RegisterModule)
        },
        {
          path: 'forgot-password',
          loadChildren: () =>import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
        },
    ]
  },
  { path : '', redirectTo : 'login', pathMatch:'full' },
  
  { path: '**', redirectTo: 'login' }

];

