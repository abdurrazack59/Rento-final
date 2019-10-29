import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
    console.log('Logout Successful.');
  }
}
