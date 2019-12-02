import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';


const routes: Routes = [
  {
    path: '',
    component: MainPage,
  //   children: [
  //     {
  //       path: 'daily',
  //       loadChildren: './daily/daily.module#DailyPageModule'
  //     },
  //     {
  //       path: 'rentals',
  //       loadChildren: './rentals/rentals.module#RentalsPageModule'
  //     },
  //   ]
  //  },
  //  {
  //    path: '',
  //    redirectTo: '/main/daily',
  //    pathMatch: 'full'
  //  }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
