import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FintechService } from 'src/app/services/fintech.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  public response: any;
  public mensaje: string = '';
  public error: boolean;
  public saveOk: boolean;
  public form: FormGroup;
  public reporte: FormGroup;

  constructor(
    private _fintech: FintechService,
    public  _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.get()
  }



  public get(): void{
    this._fintech.getAccount('1').subscribe(async(data: any) => {
      this.response = data; // response?.body.rows[0].alias
      this.form.get('FROM_CBU').setValue(data.body.data.cvu)
    },(err) => {
      console.log(err);
      this.mensaje += JSON.stringify(err);
      this.showErr();
    });
  }


  async showOk(){
    return new Promise(async(resolve,reject) => {
        this.saveOk = true;
        setTimeout(()=>{                       
         this.saveOk = false;
          resolve(true)
       }, 10000);
    });
  }

  async showErr(){
    return new Promise(async(resolve,reject) => {
        this.error = true;
        setTimeout(()=>{                        
         this.error = false;
          resolve(true)
       }, 10000);
    });
  }
  

}
