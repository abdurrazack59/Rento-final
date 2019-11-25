import {  Component,  OnInit} from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterApiService } from '../services/register-api.service';
import { ModalController } from '@ionic/angular';
import { RidelaterPage } from '../ridelater/ridelater.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = {};
  userName = '';
  mobileNumber = '';

  userImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEzGoZ6NCvbjg4hJlLL_0TLB61J8R2Xi09hoiSpGxXvVdTRoB';

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private authService: AuthService, private registerApiService: RegisterApiService, private modalController: ModalController ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.registerApiService.getUserDetails()
    .subscribe(data => {
      this.data = data.body;
      this.userName = data.body.firstName + ' ' + data.body.lastName;
      this.mobileNumber = data.body.mobileNumber;
    });
  }


  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    console.log('Logout Successful.');
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




