import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus=false; 

  constructor(private http:HttpClient,) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
    localStorage.setItem('loggedIn','true');
  }

  get isLoggedIn(){
    return this.loggedInStatus;
    }


}
  