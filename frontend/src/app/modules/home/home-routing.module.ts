import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Tp4Component } from '../tp4/tp4.component';
import { HistorialComponent } from '../tp4/historial/historial.component';
import { TransferenciaComponent } from '../tp4/transferencia/transferencia.component';
import { WalletComponent } from './wallet/wallet.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [ 
      { path: 'tp4',component: Tp4Component, 
        children: [
          { path: 'historial',component: HistorialComponent },
          { path: 'transferencias',component: TransferenciaComponent }
        ] 
      },
      { path: 'wallet',component: WalletComponent },
      { path: 'tracking',component: TrackingComponent },
      { path: 'shipping',component: ShippingComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
