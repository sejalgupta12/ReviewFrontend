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
temp = [{email:""}];

starrate = {rate5:"",rate4:"",rate3:"",rate2:"",rate1:""};


 register = {businessname:"",username:"",websiteLink:"",address1:"",address2:"",country:"",state:"",city:"",mobileNumber:"",date:""};
 average;
  width = "90%";
  height = "70%";
  type = 'pie3d';
  dataFormat = 'json';
  dataSource = {
  "chart": {
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





  constructor(private http:HttpClient,private route :Router,private user :UserService,private auth : AuthService) { }

  
  ngOnInit() {


    this.http.post("http://localhost:8080/data",{})
    .subscribe((data)=>{
    
      
       if(data)
       {
         this.temp[0].email =data[0].email;
        
       }
    
   })


   

   this.http.post("http://localhost:8080/dashboardData",{})
   .subscribe((data)=>{
     

     this.register.businessname=data[0].businessname;
     this.register.username=data[0].username;
     this.register.websiteLink=data[0].websiteLink;
     this.register.address1=data[0].address1;
     this.register.address2=data[0].address2;
     this.register.country=data[0].country;
     this.register.state=data[0].state;
     this.register.city=data[0].city;
     this.register.mobileNumber=data[0].mobileNumber;
     this.register.date = data[0].date;


     
    this.http. 
    post("http://localhost:8080/graph",{bname:this.register.businessname})
    .subscribe((data)=>{
    
     this.dataSource.data[4].value= data[0].rate5;

     this.dataSource.data[3].value= data[0].rate4;

     this.dataSource.data[2].value= data[0].rate3;

     this.dataSource.data[1].value= data[0].rate2;

     this.dataSource.data[0].value= data[0].rate1;



    })


    
    this.http.post("http://localhost:8080/rateData",{bname:this.register.businessname})
    .subscribe((data)=>{
      
      console.log(data);
      console.log(data[0].rate5);
      
   this.starrate.rate5 = data[0].rate5;
   this.starrate.rate4 = data[0].rate4;
   this.starrate.rate3 = data[0].rate3;
   this.starrate.rate2 = data[0].rate2;
   this.starrate.rate1 = data[0].rate1;
   
    parseInt(this.starrate.rate5)
   this.average = Math.round(((parseInt(this.starrate.rate5)*5)+(parseInt(this.starrate.rate4)*4)+(parseInt(this.starrate.rate3)*3)+(parseInt(this.starrate.rate2)*2)+(parseInt(this.starrate.rate1)*1))/(parseInt(this.starrate.rate5)+parseInt(this.starrate.rate4)+parseInt(this.starrate.rate3)+parseInt(this.starrate.rate2)+parseInt(this.starrate.rate1)));

   console.log(this.average);
   
    })
   

   })





    
  }


  logout(){

    this.http.post("http://localhost:8080/logout",{})
    .subscribe((data)=>{
        
      if(data=="logout"){
        this.route.navigate(['']);
        this.auth.setLoggedIn(false);
        localStorage.removeItem('loggedIn')
        this.user.setEmail("");

        
      }




    })
    

  }

}
