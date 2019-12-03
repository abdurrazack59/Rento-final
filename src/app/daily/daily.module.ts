import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DailyPage } from './daily.page';
import { PopupRidelaterPage } from '../popup-ridelater/popup-ridelater.page';


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
  declarations: [DailyPage, PopupRidelaterPage ],
  entryComponents: [PopupRidelaterPage],
})
export class DailyPageModule {}
