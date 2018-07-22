import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ActivatedRoute } from'@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css'],
  
})
export class CustomerReviewComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);

  
  selected = 0;
 business;
 star;
 rand;


 toggle() {
  if (this.ctrl.disabled) {
    this.ctrl.enable();
  } else {
    this.ctrl.disable();
  }
}
 
 t={bname:"",rate5:0,rate4:0,rate3:0,rate2:0,rate1:0};


  constructor(private http:HttpClient,private route1: ActivatedRoute) {
    console.log('Called Constructor');

    this.route1.queryParams.subscribe(params => {
        this.rand = params['q'];
        this.rand = parseInt(this.rand);
        console.log(this.rand);
        console.log(this.rand);
      
    });

   }

  ngOnInit() {
   
    this.http.post("http://localhost:8080/business",{rand:this.rand})
    .subscribe((data)=>{

    
      this.business=data[0].businessname;
     
    })

  }

  rate()

  {

    
    this.t.rate1=0;
    this.t.rate2=0;
    this.t.rate3=0;
    this.t.rate4=0;
    this.t.rate5=0;
    
    console.log(this.t.bname);

    if(this.selected==5)
    this.t.rate5 = 1;

    
    else if(this.selected==4)
     this.t.rate4 = 1;

     else if(this.selected==3)
     this.t.rate3 = 1;

    else if(this.selected==2)
     this.t.rate2 = 1;

     else this.t.rate1 = 1;

    this.http.post("http://localhost:8080/rate",{bname:this.business,rate5:this.t.rate5,rate4:this.t.rate4,rate3:this.t.rate3,rate2:this.t.rate2,rate1:this.t.rate1}).subscribe((data)=>{
      
    console.log(data);

    
    })
  }




}
