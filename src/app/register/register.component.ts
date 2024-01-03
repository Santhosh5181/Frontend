import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { AccountService } from 'src/app/Services/account.service';
import {HttpClientModule} from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User  
  users:User[];
  Email: string;
  Errmsg:string;
  constructor(private accountService:AccountService,private router:Router) {
    this.user=new User();    
   }
 
  ngOnInit(): void {
  }
  Submit(registerForm): void{
    //this.Errmsg='';
    this.accountService.Register(this.user).subscribe(response=>{
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
    this.router.navigateByUrl('/loginnew');
  }

}
