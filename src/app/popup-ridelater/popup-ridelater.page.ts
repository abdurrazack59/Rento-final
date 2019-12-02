import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-popup-ridelater',
  templateUrl: './popup-ridelater.page.html',
  styleUrls: ['./popup-ridelater.page.scss'],
})
export class PopupRidelaterPage implements OnInit {

  date = new Date().toISOString();

  constructor(private modalController: ModalController) { }


  ngOnInit() {

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
