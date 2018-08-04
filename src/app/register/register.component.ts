import { UserService } from './../user.service';
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

  t={businessname:"",username:"",email:"",websiteLink:"",address1:"",address2:"",country:"",state:"",city:"",mobileNumber:"",pass:"",cpass:"",flag:"false",date:new Date(),rand:""};
country=[];
state=[];
city=[];

COUNTRY_CODE;
STATE_CODE;

mode=false;

  registerForm=new FormGroup({
    businessname:new FormControl(null,[Validators.required]),
    username:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    websiteLink:new FormControl(null,[Validators.required]),
    Address1:new FormControl(null,[Validators.required]),
    Address2:new FormControl(null,[Validators.required]),
    Select1 :new FormControl(null,[Validators.required]),
    Select2 :new FormControl(null,[Validators.required]),

    Select3 :new FormControl(null,[Validators.required]),
    mobilenumber :new FormControl(null,[Validators.required]),


    password:new FormControl(null,[Validators.required]),
    cpass:new FormControl(null,[Validators.required])
  })
  constructor(private router:Router,private http:HttpClient,private user:UserService) { }

  ngOnInit() {


    this.user.getJSON().subscribe(data => {
      this.country =data;
      console.log(this.country);
       });
  }

  getState(){
    var index= this.country.map(x => x.name).indexOf(this.t.country);
    console.log(index);

    this.COUNTRY_CODE = this.country[index].id;

    this.state = [];
 
    
    this.user.getJSONS().subscribe(data => {


       for(let i of data){
      
        if(i.country_id == index+1)
        {
          this.state.push(i);
         
        }

       }
     
       });


  }

  getCity(){

    var index= this.state.map(x => x.name).indexOf(this.t.state);

    this.STATE_CODE = this.state[index].id;

    this.city = [];
 
    
    this.user.getJSONC().subscribe(data => {


       for(let i of data){
      
         
        if(i.state_id == index+1)
        {
      
          this.city.push(i);
        }

       }
       
     
       });

    }

  
  
  register()
  {

    if(!this.registerForm.controls.email.valid)
    {
   alert("Please Enter Valid Email");

    }
   
   else if(!this.registerForm.valid)
    {
      alert("All the fields are required");
   }
    

  else if(this.t.pass!=this.t.cpass)
  {
    
    alert("Password and Confirm Password Should be Same");
  }
  
  else
  {
    this.http.
    post("http://localhost:8080/register",{businessname:this.t.businessname,username:this.t.username,email:this.t.email,websiteLink:this.t.websiteLink,address1:this.t.address1,address2:this.t.address2,country:this.t.country,state:this.t.state,city:this.t.city,mobileNumber:this.t.mobileNumber,pass:this.t.pass,cpass:this.t.cpass,flag:this.t.flag,date:this.t.date,rand:""})
    .subscribe((data)=>{
    
        if(data=="error"){
          this.t.businessname="";
          this.t.username="";
          this.t.country="";
          this.t.city="";
          this.t.state="";
          this.t.websiteLink="";
          this.t.mobileNumber="";
          this.t.address1="";
          this.t.address2="";
          this.t.email="";
          this.t.pass="";
          this.t.cpass="";

          alert("Email Id already registered");
        }

        else{
                        
                  this.http.post("http://localhost:8080/send",{email:this.t.email}).subscribe((data)=>{
                    console.log(data);

                    if(data=='sent'){
                      this.t.businessname="";
                      this.t.username="";
                      this.t.country="";
                      this.t.city="";
                      this.t.state="";
                      this.t.websiteLink="";
                      this.t.mobileNumber="";
                      this.t.address1="";
                      this.t.address2="";
                      this.t.email="";
                      this.t.pass="";
                      this.t.cpass="";
    
                      alert("You are successfully registered.Please Confirm Your Email id to activate your account");
                      this.router.navigate(['login']); 
                    }
                    else{
                      alert("Error due to technical issue please registered again after some time");
                    }
                })
        }
    })

   }
  }
}
