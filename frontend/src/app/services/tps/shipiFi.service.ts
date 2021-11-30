import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class shipiFiService {


  constructor(private http: HttpClient  ) { }


  obtenerEstadoPago(datos: any){
    return this.http.get(`${environment.API_URI}`,datos)
  }


  informarPago(datos: any){
    return this.http.post(`${environment.API_URI}/shipiFi/informarPago/`,datos)
  }

}
