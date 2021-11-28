import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public value = 'https://www.techiediaries.com/';
  public form: FormGroup;


  constructor(
    public  _fb: FormBuilder,
  ) {
    this.initForm()
   }

  ngOnInit(): void {


  }


  private initForm(): void{
    this.form = this._fb.group({
      email: new FormControl({ value: null, disabled: false }, [ Validators.required]),
      payState: new FormControl({ value: null , disabled: false }),
      shippingState: new FormControl({ value: null , disabled: false }),
      amount: new FormControl({ value: null , disabled: false }),
      shippingDetails: new FormControl({ value: null , disabled: false }),
    });
  }


}
