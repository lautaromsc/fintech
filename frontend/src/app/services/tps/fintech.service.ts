import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FintechService {


  constructor(private http: HttpClient  ) { }


  get(){
    return this.http.get(`${environment.API_URI}${environment.getFintech}`)
  }


  getBitMap(id: string){
    return this.http.get(`${environment.API_URI}/fintech/${id}`)
  }
  

  logIn(body: any){
    return this.http.post(`${environment.API_URI}/fintech/login/`, body)
  }



  getAccount(IDUser: string){
    return this.http.get(`${environment.API_URI}${environment.getAccount}${IDUser}`)
  }

  transfer(fromCvu: string, toCvu: string, amount: string){
    return this.http.post(`${environment.API_URI}${environment.postTransfer}`, { fromCvu, toCvu, amount })
  }

  getHistory(CVU: string){
    return this.http.get(`${environment.API_URI}${environment.getTransfer}${CVU}`)
  }

  
  getShipping(){
    return this.http.get(`${environment.API_URI}${environment.getShipping}`)
  }


}
