import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajoCuatroRoutingModule } from './tp4-routing.module';
import { Tp4Component } from './tp4.component';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

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
  MatTabsModule,
  MatPaginatorModule,
  MatTableModule
]



@NgModule({
  declarations: [
    Tp4Component,
    TransferenciaComponent,
    HistorialComponent,
    CuentasComponent,
    ],
  imports: [
    CommonModule,
    TrabajoCuatroRoutingModule,
    ReactiveFormsModule,
    materials
  ],
  exports: [
    CommonModule,
    TrabajoCuatroRoutingModule,
    ReactiveFormsModule,
    materials,
  ]

  
})
export class TrabajoCuatroModule { }
