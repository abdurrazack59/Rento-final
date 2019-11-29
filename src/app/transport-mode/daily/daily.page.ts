import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RidelaterPage } from 'src/app/ridelater/ridelater.page';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async rideLater() {
    const modal = await this.modalController.create({
      component: RidelaterPage,
      animated: true,
      cssClass: 'dialog-modal',
    });
    return await modal.present();
  }
}
