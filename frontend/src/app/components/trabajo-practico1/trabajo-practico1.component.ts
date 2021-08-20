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
  public formG: FormGroup;
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
    this.formG = this._fb.group({
      TRA_DT_START: new FormControl({ value: null , disabled: false }),
      TRA_DT_END: new FormControl({ value: null , disabled: false }),
      MPA_ID_PAIS: new FormControl({ value: '' , disabled: false }),
      MG1_ID_GEO_1: new FormControl({ value: '' , disabled: false }),
      OPCION: new FormControl({ value:'REPORTE_DINAMICO', disabled: false }),
    });
  }






}
