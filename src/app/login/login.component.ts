import { UserService } from './../user.service';
import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required])
  })
  constructor( private http : HttpClient,private route:Router,private auth:AuthService,private user:UserService) { }

  l={email:"",pass:""};

  ngOnInit() {
  }

  login()
  {
    if(!this.loginForm.valid)
   {
    alert("Invalid login");

  }
  
  else
  {
   
    this.http.
        post("http://localhost:8080/checkForRegister",{email:this.l.email})
        .subscribe((data)=>{

          if(data=="notregister"){
            alert("Email is not registered! Please Register First");
            this.route.navigate(['login/register']);
            
          }
             else{
              this.http.
              post("http://localhost:8080/login",{email:this.l.email,password:this.l.pass})
              .subscribe((data)=>{
                  
          
                if (data==this.l.email) {
          
                     this.user.setEmail(this.l.email);
                     this.route.navigate(['dashboard']); 
                     this.auth.setLoggedIn(true);
                        
              } else 
              {
                if(data=="Invalid User")
                           this.user.setEmail("");
                           this.route.navigate(['login']);
                           alert("Authentication Failed! Please Enter a Valid Email Id and Password");
                           
                            this.l.email="";
                            this.l.pass="";
              }
              })
             }

        })
   
      }
}
  
}

