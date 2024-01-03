import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {
  flight:Flight;
  flights:Flight[];
  constructor(private flightService:FlightService,private router:Router) {
    this.flight=new  Flight();  
   }

  ngOnInit(): void {
    this.flightService.GetAllFlights1().subscribe(response=>{
      this.flights=response;
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }
  Edit(item):void{
    
        localStorage["fId"] =item.flightNumber;
      console.log(item);
      console.log(localStorage["fId"]);
      console.log(item.flightNumber);
      this.router.navigateByUrl('/admin-dashboard/edit-flight');

  }
  Delete(item):void{
    if(confirm("Are you sure to Delete " +item.flightNumber +" and Flight Name: "+item.airLine )) {
     // console.log("Implement delete functionality here"+item.flightNumber +"and Flight Name: "+item.airLine);
    let FlightId=item.flightNumber;
    //console.log(item);
    console.log(FlightId);
    console.log(item.flightNumber);
    this.flightService.Delete(FlightId).subscribe(response=>{
     // this.flight=response;
     this.flightService.GetAllFlights1().subscribe(response=>{
      this.flights=response;
     })
     })
    
    } 
  }

}