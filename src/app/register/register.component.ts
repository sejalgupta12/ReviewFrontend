import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),
    cpass:new FormControl(null,[Validators.required])
  })
  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit() {
  }

  moveToLogin()
  {
    this._router.navigate(['/login']);

  }
  
  register()
  {
    if(!this.registerForm.valid || (this.registerForm.controls.password.valid != this.registerForm.controls.cpass.valid))
   {
     console.log("Invalid form");
    return;
  }
  
  else
  this._userService.register(JSON.stringify(this.registerForm.value)).subscribe(
    data=>{console.log(data);
      this._router.navigate(['/login']);},
      error=>console.error(error)
  )
  // console.log(JSON.stringify(this.registerForm.value));
}
}
