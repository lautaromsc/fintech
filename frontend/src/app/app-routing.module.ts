import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found404/not-found404.component';


const routes: Routes = [
 { path: '', redirectTo: '/login/signin', pathMatch: 'full'},
 { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
 { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
 { path: "**", component: NotFound404Component }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
