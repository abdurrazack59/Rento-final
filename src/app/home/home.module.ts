import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomePage,
        children: [
          {path: 'daily',  loadChildren: '../daily/daily.module#DailyPageModule' },
          {path: 'rentals',  loadChildren: '../rentals/rentals.module#RentalsPageModule'},
          {path: 'outstation',  loadChildren: '../outstation/outstation.module#OutstationPageModule'},
          {path: 'selfdrive',  loadChildren: '../selfdrive/selfdrive.module#SelfdrivePageModule'}
      //     {
      //       path: 'daily',
      //       children: [
      //         {
      //           path: '',
      //           loadChildren: '../daily/daily.module#DailyPageModule'
      //         }
      //       ]
      //     },
      //     {
      //       path: 'rentals',
      //       children: [
      //         {
      //           path: '',
      //           loadChildren: '../rentals/rentals.module#RentalsPageModule'
      //         }
      //       ]
      //     },
      //     {
      //       path: 'outstation',
      //       children: [
      //         {
      //           path: '',
      //           loadChildren: '../outstation/outstation.module#OutstationPageModule'
      //         }
      //       ]
      //     },
      //     {
      //       path: 'selfdrive',
      //       children: [
      //         {
      //           path: '',
      //           loadChildren: '../selfdrive/selfdrive.module#SelfdrivePageModule'
      //         }
      //       ]
      //     },
        ]
      },
      {
        path: '',
        redirectTo: '/home/daily',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [HomePage, ],

})
export class HomePageModule { }
