import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajoPractico1Component } from './components/trabajo-practico1/trabajo-practico1.component';
import { TrabajoPractico2Component } from './components/trabajo-practico2/trabajo-practico2.component';


const routes: Routes = [
 { path: '', redirectTo: '/tp1', pathMatch: 'full'},
 { path: 'tp1',component: TrabajoPractico1Component },
 { path: 'tp2',component: TrabajoPractico2Component },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
