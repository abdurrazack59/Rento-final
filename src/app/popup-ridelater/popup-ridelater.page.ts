import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-ridelater',
  templateUrl: './popup-ridelater.page.html',
  styleUrls: ['./popup-ridelater.page.scss'],
})
export class PopupRidelaterPage implements OnInit {

  date = new Date().toISOString();

  constructor(private modalController: ModalController, private router: Router) { }


  ngOnInit() {

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  confirmBooking(){
    this.modalController.dismiss({
      dismissed: true,
    });
    this.router.navigate(['/home/rentals']);
  }
}
