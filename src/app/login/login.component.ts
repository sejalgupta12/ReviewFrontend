import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { request } from 'http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode;

  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required])
  })
  constructor( private http : HttpClient,private route:Router,private auth:AuthService) { }

  l={email:"",pass:""};

  ngOnInit() {
  }

  login()
  {
    if(!this.loginForm.valid)
   {
    this.mode=true;
  }
  else
  {
    this.http.
    post("http://localhost:8080/login",{email:this.l.email,password:this.l.pass})
    .subscribe((data)=>{
        
      console.log("Error"+data);

      if (data==this.l.email) {


        console.log(data);
        console.log("Login success");
                this.route.navigate(['dashboard']); 
                this.auth.setLoggedIn(true);
              
    } else 
    {
      console.log("error");
      this.route.navigate(['']);
    }
    })
  }
}
  
}
