import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
    WalletComponent,
    ShippingComponent,
    TrackingComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    materials,
    //TrabajoCuatroModule
    NgxQRCodeModule,
  ]

  
})
export class HomeModule { }
