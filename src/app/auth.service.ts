import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus=JSON.parse(localStorage.getItem('loggedIn') || 'false')
  // private loggedInStatus=false;

  constructor(private http:HttpClient,) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
    localStorage.setItem('loggedIn','true')
    
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus)
    // return this.loggedInStatus;
    }


}
  