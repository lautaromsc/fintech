import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrabajoPractico3Component } from './trabajo-practico3/trabajo-practico3.component';
import { TrabajoPractico2Component } from './trabajo-practico2/trabajo-practico2.component';
import { TrabajoPractico1Component } from './trabajo-practico1/trabajo-practico1.component';
import { SideNavComponent } from './side-nav/side-nav.component';

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
import { TrabajoCuatroModule } from '../tp4/tp4.module';
import { WalletComponent } from './wallet/wallet.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

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
  MatListModule
]

@NgModule({
  declarations: [
    HomeComponent,
    SideNavComponent,
    TrabajoPractico1Component,
    TrabajoPractico2Component,
    TrabajoPractico3Component,
    WalletComponent,
    ShippingComponent,
    TrackingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    materials,
    //TrabajoCuatroModule
    NgxQRCodeModule
  ]
})
export class HomeModule { }
