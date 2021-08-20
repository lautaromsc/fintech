import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FintechService {


  constructor(private http: HttpClient  ) { }


  get(){
    return this.http.get(`${environment.API_URI}${environment.getFintech}`)
  }


  getbyId(id: string){
    return this.http.get(`${environment.API_URI}/fintech/${id}`)
  }
}