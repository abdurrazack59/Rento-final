import {  Component,  OnInit} from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterApiService } from '../services/register-api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = {};
  userName: any = '';
  mobileNumber: any = 9876543210;

  userImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEzGoZ6NCvbjg4hJlLL_0TLB61J8R2Xi09hoiSpGxXvVdTRoB';

  constructor(private router: Router, private authService: AuthService, private registerApiService: RegisterApiService ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.registerApiService.getUserDetails()
    .subscribe(data => {
      this.data = data.body;
      this.userName = data.body.firstName + ' ' + data.body.lastName;
    });
  }


  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
    console.log('Logout Successful.');
  }

}




