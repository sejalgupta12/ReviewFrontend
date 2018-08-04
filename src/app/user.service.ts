import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Email; 

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     
    });
    this.getJSONS().subscribe(data => {
     
    });
    
    this.getJSONC().subscribe(data => {
     
    });
}

public getJSON(): Observable<any> {
    return this.http.get("./assets/country.json")
    
} 

public getJSONS(): Observable<any> {
  return this.http.get("./assets/state.json")
  
} 


public getJSONC(): Observable<any> {
  return this.http.get("./assets/city.json")
  
} 
  
  setEmail(value:String){
    this.Email=value;
    
  }

  get getEmail(){
    return this.Email;

    }

}
