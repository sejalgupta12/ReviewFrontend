import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  t ={email:""};
  l={password:"",cpassword:""}

  ngOnInit() {
  }

  fpassword(){


    
    this.http.post("http://localhost:8080/fsend",{email:this.t.email}).subscribe((data)=>{
       
        
         if(data=='sent'){
          
    alert("Email is sent for reset new password");
    this.router.navigate(['']);
   

         }
        else{

          console.log("Email id not registered");
          alert("Email id not registered");
         
         }
    })


  }

}
