import { Component, OnInit } from '@angular/core';

export interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  selectedRoles = ['Admin-1', 'admin-0'];

  allroles: Role [] = [
    { value: ' admin-0 ', viewValue: 'Admin' },
    { value: ' user-1 ', viewValue: 'User' },
    { value: ' visited-2 ', viewValue: 'Visited' }
  ];

  roles = [];


  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }

}
