import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Socket } from 'ngx-socket-io';
import { MapCustomService } from 'src/app/services/mapbox/map-custom.service';
import { FintechService } from 'src/app/services/tps/fintech.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public value = 'https://www.shippify.finance//';
  public form: FormGroup;

  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};

  constructor(
    public  _fb: FormBuilder,
    private mapCustomService: MapCustomService, 
    private renderer2: Renderer2,
    private socket: Socket,
    private _fintech: FintechService,
  ) {
    this.initForm()
   }

  ngOnInit(): void {

    this.mapCustomService.buildMap().then(({geocoder, map}) => {
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,geocoder.onAdd(map));
        console.log('All is OK');
      }).catch((err) => {
        console.log('Error', err);
      });

    this.mapCustomService.cbAddress.subscribe((getPoint) => {
      if (this.modeInput === 'start') {
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end') {
        this.wayPoints.end = getPoint;
      }
    });

    this.socket.fromEvent('position').subscribe(({coords}) => {
      console.log('******* DESDE SERVER ****', coords);
      this.mapCustomService.addMarkerCustom(coords);
    })


    this._fintech.getShipping().subscribe((data: any) => {
      this.form.get('email').setValue(data.emailAdress);
      this.form.get('payState').setValue(data.estadoPago);
      this.form.get('shippingState').setValue(data.estadoEnvio);
      this.form.get('amount').setValue(data.amount);
      this.form.get('adress').setValue(data.direccionEnvio);
      this.form.get('shippingDetails').setValue(data.emailAdress);
    })

  }


  private initForm(): void{
    this.form = this._fb.group({
      email: new FormControl({ value: null, disabled: false }, [ Validators.required]),
      payState: new FormControl({ value: null , disabled: false }),
      shippingState: new FormControl({ value: null , disabled: false }),
      amount: new FormControl({ value: null , disabled: false }),
      adress: new FormControl({ value: null , disabled: false }),
      shippingDetails: new FormControl({ value: null , disabled: false }),
    });
  }









  drawRoute(): void {
    console.log('***** PUNTOS de ORIGEN y DESTINO', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];

    this.mapCustomService.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  testMarker(): void {
    this.mapCustomService.addMarkerCustom([-58.6033381, -34.6158037]);
  }





}


export class WayPoints {
  start: any;
  end: any
}
