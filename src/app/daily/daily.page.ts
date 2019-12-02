import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupRidelaterPage } from '../popup-ridelater/popup-ridelater.page';

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
      component: PopupRidelaterPage,
      animated: true,
      cssClass: 'dialog-modal',
    });
    return await modal.present();
  }
}
