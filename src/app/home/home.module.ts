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
          {
            path: 'daily',
            children: [
              {
                path: '',
                loadChildren: '../daily/daily.module#DailyPageModule'
              }
            ]
          },
          {
            path: 'rentals',
            children: [
              {
                path: '',
                loadChildren: '../rentals/rentals.module#RentalsPageModule'
              }
            ]
          },
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
