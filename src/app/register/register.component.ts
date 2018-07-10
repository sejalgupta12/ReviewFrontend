import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  t={username:"",email:"",pass:"",cpass:"",flag:"false"};

  registerForm=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),
    cpass:new FormControl(null,[Validators.required])
  })
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  register()
  {
    if(!this.registerForm.valid || (this.registerForm.controls.password.valid != this.registerForm.controls.cpass.valid))
   {
     console.log("Invalid form");
    return;
  }
  
  else
  {
    this.http.
    post("http://localhost:8080/register",{username:this.t.username,email:this.t.email,password:this.t.pass,flag:this.t.flag})
    .subscribe((data)=>{
        console.log(data);
    })

    console.log("Send called from ANGULAR");

    this.http.post("http://localhost:8080/send",{email:this.t.email}).subscribe((data)=>{
        console.log(data);

        console.log("msgg from node ");

         if(data=='sent'){

          console.log("success from node");
         }
        else{
           console.log("Error");
         }
    })

    this.t.username="";
    this.t.email="";
    this.t.pass="";
    this.t.cpass="";
   }
  }
}
