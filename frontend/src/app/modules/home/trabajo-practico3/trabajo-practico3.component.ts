import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FintechService } from 'src/app/services/fintech.service';
import md5 from 'md5'

@Component({
  selector: 'app-trabajo-practico3',
  templateUrl: './trabajo-practico3.component.html',
  styleUrls: ['./trabajo-practico3.component.scss']
})
export class TrabajoPractico3Component implements OnInit {


  public response: String;
  public mensajeError: string = '';
  public error: boolean;
  public saveOk: boolean;
  public form: FormGroup;


  constructor(
    private _fintech: FintechService,
    public  _fb: FormBuilder,
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
 
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


  public logIn(){

    const pass = md5(this.form.get('PASSWORD').value);
    const body = {
       'name': this.form.get('NAME').value,
       'password' : pass
     }

    this._fintech.logIn(body).subscribe(async(data: any) => {
      this.response = data;
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

    async registrarse(){
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
      NAME: new FormControl({ value: null, disabled: false }, [ Validators.required]),
      PASSWORD: new FormControl({ value: null, disabled: false }, [ Validators.required]),
    });


  }


}
