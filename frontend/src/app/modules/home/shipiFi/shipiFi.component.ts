import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { shipiFiService } from 'src/app/services/shipiFi.service';



@Component({
  selector: 'shipiFi',
  templateUrl: './shipiFi.component.html',
  styleUrls: ['./shipiFi.component.scss']
})
export class shipiFiComponent implements OnInit {

  public response: String;
  public mensajeError: string = '';
  public error: boolean;
  public saveOk: boolean;
  public form: FormGroup;
  public reporte: FormGroup;
  private patronExpReg = new RegExp( /^([0-9A-Fa-f])+$/ );

  constructor(
    private _shipiFi: shipiFiService,
    public  _fb: FormBuilder,

  ) { 
    this.initForm()
  }

  ngOnInit(): void {
    //this.get()
  }


// SE DEBERIA RECIBIR LOS DATOS DEL USUARIO LOGUEADO PARA INFORMAR EL PAGO
  public informarPago(){
    debugger;
    console.log("entroo")
    var obj=[{name:"aa", email:"ASDasda",pwd: "pwd"}]
    this._shipiFi.informarPago(obj).subscribe(async(data: any) => {
      this.response = data;
      this.showOk()
    },(err) => {
      console.log(err);
      this.mensajeError += JSON.stringify(err);
      this.showErr();
    });
  }




  async showOk(){
    return new Promise(async(resolve,reject) => {
        this.saveOk = true;
        setTimeout(()=>{   
         console.log("  this.saveOk = false; ")                      
         this.saveOk = false;
          resolve(true)
       }, 2000);
    });
  }

  async showErr(){
    return new Promise(async(resolve,reject) => {
        this.error = true;
        setTimeout(()=>{   
         console.log("  this.saveOk = false; ")                      
         this.error = false;
          resolve(true)
       }, 2000);
    });
  }
  


  private initForm(): void{
    
  }






}
