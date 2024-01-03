import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit {
  uname:string=''
    constructor(private router:Router,private activatedRoute:ActivatedRoute) {
      this.uname=localStorage["uname"]
     }
  

  ngOnInit(): void {
  }
    LogOut()
    {
      this.router.navigateByUrl('/loginnew'); //redirect to login
    }
  }

