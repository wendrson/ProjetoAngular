import { User } from './user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private user: User;
 loginForm: FormGroup;
  isSubmitted = false;

  get formControl() {
      return this.loginForm.controls;
    }


  constructor( private router: Router, private authService: AuthService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log (this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/user');


    }

  }


