import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FintechService } from 'src/app/services/fintech.service';


@Component({
  selector: 'app-trabajo-practico1',
  templateUrl: './trabajo-practico1.component.html',
  styleUrls: ['./trabajo-practico1.component.scss']
})
export class TrabajoPractico1Component implements OnInit {

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
    this.get()
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


  public getBitMap(){
    this._fintech.getBitMap(this.form.get('HEXA').value).subscribe(async(data: any) => {
      this.response = data;
      this.form.get('BINARY').setValue(data)
    },(err) => {
      console.log(err);
      this.mensajeError += JSON.stringify(err);
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
      HEXA: new FormControl({ value: null , disabled: false }),
      BINARY: new FormControl({ value: null , disabled: false }),
      NIBBLE: new FormControl({ value: null , disabled: false }),
    });
  }






}
