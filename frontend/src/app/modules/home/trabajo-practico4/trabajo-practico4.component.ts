import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FintechService } from 'src/app/services/fintech.service';


@Component({
  selector: 'app-trabajo-practico4',
  templateUrl: './trabajo-practico4.component.html',
  styleUrls: ['./trabajo-practico4.component.scss']
})
export class TrabajoPractico4Component implements OnInit {

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
      this.response = data;
      this.showOk()
    },(err) => {
      console.log(err);
      this.mensajeError += JSON.stringify(err);
      this.showErr();
    });
  }


  public transferToCbu(): void{

  }


  private initForm(): void{
    this.form = this._fb.group({
      TO_CBU: new FormControl({ value: '', disabled: false }),
      MONTO: new FormControl({ value: '', disabled: false }),
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
  








}
