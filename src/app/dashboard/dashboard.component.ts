import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



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
          "value": "20"
      },
      {
          "label": "2",
          "value": "30"
      },
      {
          "label": "3",
          "value": "10"
      },
      {
          "label": "4",
          "value": "30"
      },
      {
        "label": "5",
        "value": "10"
    }
  ]
};





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
