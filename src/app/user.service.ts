import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData{
  email:string,
  status:boolean
}

interface isLoggedIn{
  status:boolean
}

interface logoutStatus{
  success:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}


  getData(){
    return this.http.get<myData>('/data')
  }

  isLoggedIn():Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/isloggedin')
  }

  logout(){
    return this.http.get<logoutStatus>('/logout')
  }
 

}
