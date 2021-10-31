import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FintechService } from 'src/app/services/fintech.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {


  public response: any;
  public mensajeError: string = '';
  public error: boolean;
  public saveOk: boolean;
  public form: FormGroup;
  public reporte: FormGroup;

  constructor(
    private _fintech: FintechService,
    public  _fb: FormBuilder,
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
    this.get()
  }



  public get(): void{
    this._fintech.getAccount('1').subscribe(async(data: any) => {
      this.response = data; // response?.body.rows[0].alias
      this.form.get('FROM_CBU').setValue(data.body.rows[0].cvu)
      this.showOk()
    },(err) => {
      console.log(err);
      this.mensajeError += JSON.stringify(err);
      this.showErr();
    });
  }


  public transferToCbu(): void {

    this._fintech.transfer(
      this.form.get('FROM_CBU').value,
      this.form.get('TO_CBU').value,
      this.form.get('MONTO').value
    )
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
      });
  }






  private initForm(): void{
    this.form = this._fb.group({
      FROM_CBU: new FormControl({ value: '', disabled: false }),
      TO_CBU: new FormControl({ value: '', disabled: false }),
      MONTO: new FormControl({ value: 0, disabled: false }),
    });
  }



  async showOk(){
    return new Promise(async(resolve,reject) => {
        this.saveOk = true;
        setTimeout(()=>{   
         console.log("this.saveOk = false; ")                      
         this.saveOk = false;
          resolve(true)
       }, 2000);
    });
  }

  async showErr(){
    return new Promise(async(resolve,reject) => {
        this.error = true;
        setTimeout(()=>{   
         console.log("this.saveOk = false; ")                      
         this.error = false;
          resolve(true)
       }, 2000);
    });
  }
  

}
