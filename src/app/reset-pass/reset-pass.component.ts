import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  l ={email:"sejalgupta218@gmail.com",password:"",cpassword:""}

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  resetPass(){

    if(this.l.password!=this.l.cpassword){
      alert("both password and confirm password shoould be same");
    }

    else{
      
    this.http.post("http://localhost:8080/resetPass",{email:this.l.email,password:this.l.password,cpassword:this.l.cpassword}).subscribe((data)=>{
       
        
          if(data=='sent'){

            alert("Now Your password is changed");
            this.route.navigate(['']);
          }

        else{
          alert("Error :"+data);
              }
       })

    }

  }

}
