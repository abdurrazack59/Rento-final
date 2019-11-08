import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  mobileNumber = 9876543210;
  constructor(private router: Router, private alertController: AlertController,) { }

  ngOnInit() {
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (res) => {

          }
        },
        {
          text: 'OK',
          cssClass: 'buttonCss',
          handler: () => {
            sessionStorage.removeItem('token');
            this.router.navigate(['/login']);
            console.log('Logout Successful.');
          }
        }
      ]
    });

    await alert.present();
  }


}
