import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'home',
     // canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),


    // children:[
    //   {path:'user',loadChildren:()=> import('./userprofile/user/user.module').then(m=>m.UserPageModule)}
    // ]

  },

  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'driver', loadChildren: './driver/driver.module#DriverPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user', loadChildren: './userprofile/user/user.module#UserPageModule' },
  { path: 'about', loadChildren: './userprofile/about/about.module#AboutPageModule' },
  { path: 'ridenow', loadChildren: './ridenow/ridenow.module#RidenowPageModule' },
  { path: 'ridelater', loadChildren: './ridelater/ridelater.module#RidelaterPageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
