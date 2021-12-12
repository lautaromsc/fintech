import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { 
    path: '', component: LoginComponent, 
    children: [
       { path: 'signin', component: SigninComponent }, 
       { path: 'signup', component: SignupComponent }, 
       { path: 'inicio', component: InicioComponent }, 
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
