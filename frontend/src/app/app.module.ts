import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { TrabajoPractico1Component } from './components/trabajo-practico1/trabajo-practico1.component';
import { TrabajoPractico2Component } from './components/trabajo-practico2/trabajo-practico2.component';
import { HttpClientModule } from '@angular/common/http';
import { TrabajoPractico3Component } from './components/trabajo-practico3/trabajo-practico3.component';



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
    AppComponent,
    SideNavComponent,
    TrabajoPractico1Component,
    TrabajoPractico2Component,
    TrabajoPractico3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materials,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
