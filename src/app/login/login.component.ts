import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '../Models/auth-user';
import { Login } from '../login';
import { FlightService } from 'src/app/Services/flight.service';
import {HttpClientModule} from '@angular/common/http';
import {FormControl, NgForm, NgModel, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:Login
authuser:AuthUser
Email: string;

errmsg:string='';
  constructor(private flightService:FlightService,private router:Router) {
 this.login= new Login();
  }

  ngOnInit(): void {
  }
  Submit(loginForm):void
  {
    //
   
    //end
    let email=this.login.email;
    localStorage["email"]= email;
    console.log(email);

    this.flightService.Validate(this.login).subscribe(response=>{
      this.authuser=response;
      console.log(this.authuser);
     
      console.log(this.Email);
      if(this.authuser!=null)
      {
        localStorage["token"]=this.authuser.token;
        if(this.authuser.role=='Admin')
        {
         // localStorage["email"]= this.Email;
          //localStorage["token"]=this.authuser.token;
          localStorage["uname"]=this.authuser.name;
          //redirect to admin component
          this.router.navigateByUrl('/admin-dashboard/add-flight');
          // this.router.navigateByUrl('/admin-dashboard');
          
        }
        else if(this.authuser.role=='User')
        {
        //  localStorage["uname"]= this.Email;
         // localStorage["token"]=this.authuser.token;
          //set value in local storage
          localStorage["uname"]=this.authuser.name;
          //redirect to customer componet
          this.router.navigate(['/user-dashboard/search-flight']);
        }
      }
      else{
        this.errmsg="Invalid User Name or Password";
      }
    })
  }
}
