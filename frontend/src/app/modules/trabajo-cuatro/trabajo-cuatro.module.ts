import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajoCuatroRoutingModule } from './trabajo-cuatro-routing.module';
import { TrabajoCuatroComponent } from './trabajo-cuatro.component';
//import { SideNavComponent } from '../home/side-nav/side-nav.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { HistorialComponent } from './historial/historial.component';
import { CuentasComponent } from './cuentas/cuentas.component';

let materials = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
]



@NgModule({
  declarations: [
    TrabajoCuatroComponent,
    TransferenciaComponent,
    HistorialComponent,
    CuentasComponent,
    //SideNavComponent
  ],
  imports: [
    CommonModule,
    TrabajoCuatroRoutingModule,
    ReactiveFormsModule,
    materials
  ]

  
})
export class TrabajoCuatroModule { }