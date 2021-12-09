import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found404/not-found404.component';


const routes: Routes = [
 { path: '', redirectTo: '/home/shipping', pathMatch: 'full'},
 { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
 { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
 { path: 'landing-page', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
 { path: "**", component: NotFound404Component }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
