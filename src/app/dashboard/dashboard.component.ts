import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient,private route :Router) { }

  ngOnInit() {
  }

  logout(){

    this.http.
    post("http://localhost:8080/dashboard",{})
    .subscribe((data)=>{
        
      if(data=="logout"){
        this.route.navigate(['']);
        console.log("Logout sucessfuly");
      }




    })
    

  }

}
