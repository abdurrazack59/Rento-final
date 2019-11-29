import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DailyPage } from './daily.page';
import { GooglemapPage } from 'src/app/googlemap/googlemap.page';


const routes: Routes = [
  {
    path: '',
    component: DailyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailyPage,GooglemapPage ],

})
export class DailyPageModule {}
