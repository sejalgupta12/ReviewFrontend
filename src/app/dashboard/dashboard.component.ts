import { AuthService } from './../auth.service';
import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//email="";
temp = {};

  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource = {
  "chart": {
      "caption": "Star rating of website visitors",
      "subcaption": "Last Year",
      "startingangle": "120",
      "showlabels": "0",
      "showlegend": "1",
      "enablemultislicing": "0",
      "slicingdistance": "15",
      "showpercentvalues": "1",
      "showpercentintooltip": "0",
      "plottooltext": "star : $label Total rate : $datavalue",
      "theme": "ocean"
  },
  "data": [
      {
          "label": "1",
          "value": "0"
      },
      {
          "label": "2",
          "value": "0"
      },
      {
          "label": "3",
          "value": "0"
      },
      {
          "label": "4",
          "value": "0"
      },
      {
        "label": "5",
        "value": "0"
    }
  ]
};





  constructor(private http:HttpClient,private route :Router,private user :UserService) { }

  
  ngOnInit() {


    this.http.post("http://localhost:8080/data",{})
    .subscribe((data)=>{
    
      this.temp =data;
      
       if(this.temp.status)
       {

       }
    else{
        this.logout();

       }
   })


    
    this.http. 
    post("http://localhost:8080/graph",{})
    .subscribe((data)=>{
     
    
     this.dataSource.data[4].value= data[0].rate5;

     this.dataSource.data[3].value= data[0].rate4;

     this.dataSource.data[2].value= data[0].rate3;

     this.dataSource.data[1].value= data[0].rate2;

     this.dataSource.data[0].value= data[0].rate1;



    })
  }



  logout(){

    this.http.post("http://localhost:8080/logout",{})
    .subscribe((data)=>{
        
      if(data=="logout"){
        this.route.navigate(['']);
        console.log("Logout sucessfuly");
      }




    })
    

  }

}
