import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrabajoPractico1Component } from './trabajo-practico1/trabajo-practico1.component';
import { TrabajoPractico2Component } from './trabajo-practico2/trabajo-practico2.component';
import { TrabajoPractico3Component } from './trabajo-practico3/trabajo-practico3.component';
import { Tp4Component } from '../tp4/tp4.component';
import { HistorialComponent } from '../tp4/historial/historial.component';
import { TransferenciaComponent } from '../tp4/transferencia/transferencia.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [ 
      { path: 'tp1',component: TrabajoPractico1Component },
      { path: 'tp2',component: TrabajoPractico2Component },
      { path: 'tp3',component: TrabajoPractico3Component },
      { path: 'tp4',component: Tp4Component, 
        children: [
          { path: 'historial',component: HistorialComponent },
          { path: 'transferencias',component: TransferenciaComponent }
        ] 
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
