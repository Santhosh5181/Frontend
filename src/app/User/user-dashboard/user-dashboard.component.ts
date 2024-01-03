import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  uname:string;
    constructor(private router:Router) {
      this.uname=localStorage["uname"]
     }
  
    ngOnInit(): void {
    }
    LogOut()
    {
      this.router.navigateByUrl('/login'); //redirect to login
    }
  }