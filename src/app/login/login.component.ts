import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


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
  constructor(private http : HttpClient,private route:Router) { }

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
        

      if (data==this.l.email) {


        console.log("Login success");
                this.route.navigate(['/dashboard']);        

    } else 
    {
      console.log("error");
      this.route.navigate(['']);
    }
    })
  }
}
  
}
