import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms';
import { CancelTicletComponent } from 'src/app/User/cancel-ticlet/cancel-ticlet.component';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  isShown: boolean = false ; 
  flight:Flight;
  flights:Flight[];
  Errmsg: string;
  constructor(private flightService:FlightService,private router:Router) {
     this.flight=new  Flight();   
   }

  ngOnInit(): void {
    this.Errmsg='';
    let FlightId=localStorage["fId"];
    console.log(localStorage["fId"]);
    this.flightService.GetFlightById(FlightId).subscribe(response=>{
this.flight=response;
console.log(this.flight);
  })
}
Submit(editForm):void{

  this.flightService.UpdateFlightDetails(this.flight).subscribe(response=>{
    console.log(response);
   
  },(error)=>{
    console.log(error);
  })

  if(confirm("Flight Details are Updated...Flight Number: " + this.flight.flightNumber +" and Flight Name: "+ this.flight.flightNumber)) {
    this.router.navigateByUrl('/admin-dashboard/view-flight');

  }
 
}
Cancel():void{
  this.router.navigateByUrl('/admin-dashboard/view-flight');
}

}
