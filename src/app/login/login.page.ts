import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClientModule, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

    get f() {
      return this.loginForm.controls;
    }
    onSubmit() {
      this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        loginData => {

          console.log('this is my token' + sessionStorage.getItem('token'));
          this.router.navigate(['/home']);


        },
        error => {
          console.log('Error ' + error);
        }
      );
  }

}
