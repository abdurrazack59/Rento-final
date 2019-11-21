import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterApiService } from 'src/app/services/register-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  data: any = {};
   userName = '';
   mobileNumber = '';
  constructor(private router: Router, private alertController: AlertController,
              private registerApiService: RegisterApiService, private authService: AuthService) { }

  ngOnInit() {
    this.registerApiService.getUserDetails()
    .subscribe(data => {
      this.data = data.body;
      this.userName = data.body.firstName + ' ' + data.body.lastName;
      this.mobileNumber = data.body.mobileNumber;
    });

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
             this.authService.logout();
             this.router.navigate(['/login']);
             console.log('Logout Successful.');
          }
        }
      ]
    });

    await alert.present();
  }


}
