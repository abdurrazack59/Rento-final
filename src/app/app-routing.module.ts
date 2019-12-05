import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule',
  },
  // {
  //   path: 'home',
  //   // canActivate: [AuthGuard],
  //   loadChildren: './home/home.module#HomePageModule'
  // },

  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'driver', loadChildren: './driver/driver.module#DriverPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user', loadChildren: './userprofile/user/user.module#UserPageModule' },
  { path: 'about', loadChildren: './userprofile/about/about.module#AboutPageModule' },
  { path: 'ridenow', loadChildren: './ridenow/ridenow.module#RidenowPageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' },
  { path: 'popup-ridelater', loadChildren: './popup-ridelater/popup-ridelater.module#PopupRidelaterPageModule' },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
