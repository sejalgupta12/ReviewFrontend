import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit {

 business;
 star;

 name;
 
 t={bname:"",rate5:0,rate4:0,rate3:0,rate2:0,rate1:0};


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.t.bname = this.name;

    this.http.post("http://localhost:8080/business",{})
    .subscribe((data)=>{

      this.business=data;
      console.log(this.business);



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

    if(this.star==5)
    this.t.rate5 = 1;

    
    else if(this.star==4)
     this.t.rate4 = 1;

     else if(this.star==3)
     this.t.rate3 = 1;

    else if(this.star==2)
     this.t.rate2 = 1;

     else this.t.rate1 = 1;


     console.log("rate5:"+this.t.rate5);
     console.log("rate4:"+this.t.rate4);
     console.log("rate3:"+this.t.rate3);
     console.log("rate2:"+this.t.rate2);
     console.log("rate1:"+this.t.rate1);
     
    this.http.post("http://localhost:8080/rate",{bname:this.t.bname,rate5:this.t.rate5,rate4:this.t.rate4,rate3:this.t.rate3,rate2:this.t.rate2,rate1:this.t.rate1}).subscribe((data)=>{
      
    console.log(data);

    
    })
  }




}
