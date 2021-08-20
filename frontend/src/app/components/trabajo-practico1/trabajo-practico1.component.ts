import { Component, OnInit } from '@angular/core';
import { FintechService } from 'src/app/services/fintech.service';


@Component({
  selector: 'app-trabajo-practico1',
  templateUrl: './trabajo-practico1.component.html',
  styleUrls: ['./trabajo-practico1.component.scss']
})
export class TrabajoPractico1Component implements OnInit {


  public response: String;

  constructor(
    private _fintech: FintechService,
  ) { }

  ngOnInit(): void {
    this.get()

  }



  public get(){

    this._fintech.get().subscribe(async(data: any) => {
      this.response = data;
    },(err) => {
      console.log(err);
      //this.mensajeError += JSON.stringify(err);
      //this.error = true;
    });

  }


}
