import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapPage } from '../googlemap/googlemap.page';



@NgModule({
  declarations: [GooglemapPage],
  imports: [
    CommonModule,
  ],
  exports: [GooglemapPage]
})
export class SharedModule { }
