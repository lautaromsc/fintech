import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tp4Component } from './tp4.component';



const routes: Routes = [
  { path: '', component: Tp4Component }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajoCuatroRoutingModule { }
