import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-ridelater',
  templateUrl: './ridelater.page.html',
  styleUrls: ['./ridelater.page.scss'],
})
export class RidelaterPage implements OnInit {

  date = new Date().toISOString();

  constructor(private el: ElementRef, private modalController: ModalController) { }


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
