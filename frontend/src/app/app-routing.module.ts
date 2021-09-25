import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajoPractico1Component } from './components/trabajo-practico1/trabajo-practico1.component';
import { TrabajoPractico2Component } from './components/trabajo-practico2/trabajo-practico2.component';
import { TrabajoPractico3Component } from './components/trabajo-practico3/trabajo-practico3.component';


const routes: Routes = [
 { path: '', redirectTo: '/tp3', pathMatch: 'full'},
 { path: 'tp1',component: TrabajoPractico1Component },
 { path: 'tp2',component: TrabajoPractico2Component },
 { path: 'tp3',component: TrabajoPractico3Component },

 { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
