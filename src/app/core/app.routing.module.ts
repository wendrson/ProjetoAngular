import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { UserComponent } from '../home/user.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: LoginComponent },

];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
