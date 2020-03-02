import { Component, OnInit } from '@angular/core';

export interface Role {
  name: string;
  state: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  roles: Role [] = [
    { name: " Admin-0 ", state: "Admin" },
    { name: " User-1 ", state: "User" },
    { name: " Visited-2 ", state: "Visited" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
