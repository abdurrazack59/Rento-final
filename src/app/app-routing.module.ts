import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // canActivate: [AuthGuard],
    component: HomePage,
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
  { path: 'daily', loadChildren: './transport-mode/daily/daily.module#DailyPageModule' },
  { path: 'rentals', loadChildren: './transport-mode/rentals/rentals.module#RentalsPageModule' },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
