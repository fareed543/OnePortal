import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';


export const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch:'full' },

 
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

  // {
  //   path : '',
  //   component : LayoutComponent,
  //   children : [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'developer',
  //       loadChildren: () =>
  //         import('./developer/developer.module').then(m => m.DeveloperModule)
  //     }
  //   ]
  // },
  
  { path: '**', redirectTo: 'login' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
