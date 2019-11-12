import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GooglemapPage } from './googlemap.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: GooglemapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GooglemapPage],
  providers: [Geolocation]
})
export class GooglemapPageModule {}
