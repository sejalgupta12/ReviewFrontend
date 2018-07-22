import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgotForm=new FormGroup({
   
    email:new FormControl(null,[Validators.email,Validators.required])
  })

  constructor(private router:Router,private http:HttpClient,private user:UserService) { }

  t ={email:""};
  l={password:"",cpassword:""}

  ngOnInit() {
  }

  fpassword(){
    
    if(!this.forgotForm.controls.email.valid)
    {
   alert("Please Enter Valid Email Id");

    }
   
   else if(!this.forgotForm.valid)
    {
      alert("Please Enter Email Id");
   }
    else
    {
    this.http.post("http://localhost:8080/fsend",{email:this.t.email}).subscribe((data)=>{
       
        
         if(data=='sent'){
          
    alert("link for reset password is sent to your registered email id");
    this.router.navigate(['login']);
   

         }
        else{

         
          alert("Email id not registered");
         
         }
    })


  
  }

}
}
