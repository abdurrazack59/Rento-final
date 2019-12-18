import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { RegisterApiService } from '../services/register-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private http: HttpClientModule, private authService: AuthService,
              private registerApiService: RegisterApiService,
  ) { }

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
  // onSubmit() {
  //   this.authService.login(this.f.username.value, this.f.password.value)
  //     .subscribe(
  //       loginData => {

  //         if (sessionStorage.getItem('role') === 'ROLE_USER') {
  //           this.router.navigate(['/home']);
  //         } else if (sessionStorage.getItem('role') === 'ROLE_ADMIN') {
  //           this.router.navigate(['/admin']);
  //         } else if (sessionStorage.getItem('role') === 'ROLE_DRIVER') {
  //           this.router.navigate(['/driver']);
  //         }
  //         console.log('Logged in successfully..');
  //         this.registerApiService.getUserDetails()
  //           .subscribe((data) => {
  //           console.log(data);
  //         });
  //       },
  //       Error => {
  //         console.log('Error ' + Error.prototype);
  //       }
  //     );
  // }

  onSubmit(error) {
    if (this.f.username.value === 'user' && this.f.password.value === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert(error);
    }
  }

}



