import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../services/register-api.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private registerApi: RegisterApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      roles:this.formBuilder.array([{name:"user"}])
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onFormSubmit(form: NgForm) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerApi.addNewUser(form).subscribe(res => {
    });
    this.router.navigate(['/login']);
  }

}
