import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopupRidelaterPage } from './popup-ridelater.page';

const routes: Routes = [
  {
    path: 'popup-ridelater',
    component: PopupRidelaterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopupRidelaterPage],
})
export class PopupRidelaterPageModule {}
