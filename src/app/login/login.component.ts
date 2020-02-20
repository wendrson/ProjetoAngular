import { User } from './user';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private user: User;

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    console.log();
  }

}
