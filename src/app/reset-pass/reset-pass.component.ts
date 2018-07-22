import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  l ={password:"",cpassword:""}

  resetForm=new FormGroup({

    password:new FormControl(null,[Validators.required]),
    cpass:new FormControl(null,[Validators.required])

  })

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  resetPass(){

  if(!this.resetForm.valid)
    {
      alert("Both the fields are required");
   }
    
   else if(this.l.password!=this.l.cpassword){
      alert("Password and Confirm Password must be same");
      this.l.cpassword="";
      this.l.password = "";
    }

    else{
      
    this.http.post("http://localhost:8080/resetPass",{password:this.l.password,cpassword:this.l.cpassword}).subscribe((data)=>{
       
        
          if(data){

            console.log(data);
          alert("Your password is Successfully Changed");
          this.route.navigate(['login']);
          this.l.cpassword="";
          this.l.password = "";
          
          }

        else{
          alert("Error :"+data);
              }
       })

    }

  }

}
