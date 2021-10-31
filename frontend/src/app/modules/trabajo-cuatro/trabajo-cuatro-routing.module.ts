import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajoCuatroComponent } from './trabajo-cuatro.component';


const routes: Routes = [
  { 
    path: '', component: TrabajoCuatroComponent, //children: [{ path: 'tp4',component: TransferenciaComponent }]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajoCuatroRoutingModule { }
