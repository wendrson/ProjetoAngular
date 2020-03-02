import { Component, OnInit } from '@angular/core';

export interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  roles = [
    { name: " Admin ", state: "ADM" },
    { name: " User ", state: "USER" },
    { name: " Visited ", state: "VISITED" },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
