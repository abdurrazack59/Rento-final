import { Component, OnInit } from '@angular/core';
import { PopupRidelaterPage } from '../popup-ridelater/popup-ridelater.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.page.html',
  styleUrls: ['./rentals.page.scss'],
})
export class RentalsPage implements OnInit {

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
