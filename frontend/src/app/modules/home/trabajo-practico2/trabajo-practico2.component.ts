import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FintechService } from 'src/app/services/tps/fintech.service';

@Component({
  selector: 'app-trabajo-practico2',
  templateUrl: './trabajo-practico2.component.html',
  styleUrls: ['./trabajo-practico2.component.scss']
})
export class TrabajoPractico2Component implements OnInit {

    public response: String;
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
   // this.get()
  }

    public get(){
    this._fintech.get().subscribe(async(data: any) => {
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
    this.form = this._fb.group({
      RESPONSE: new FormControl({ value: null , disabled: false }),
    });
  }


}
