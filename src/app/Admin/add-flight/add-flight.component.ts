import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  isShown: boolean = false ; 
  flight:Flight;
  flights:Flight[];
  Errmsg: string;
    constructor(private flightService:FlightService,private router:Router) {
      this.flight=new  Flight();     
    }

  ngOnInit(): void {
    this.flightService.GetAllFlights1().subscribe(response=>{
      this.flights=response;
      console.log(response);
    })
  }
  Submit(flightForm):void//add new flight
  {
    console.log("clicked");
    this.Errmsg='';
    this.flightService.AddFlight(this.flight).subscribe(response=>{
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
    //
    this.Errmsg="New Flight Details Added Successfully, From: "+ this.flight.from_Place + " To: "+ this.flight.to_Place;
   
    this.flight.airLine=' ';
    this.flight.intrument_Used=' ';
    this.flight.from_Place=' ';
    this.flight.to_Place=' ';
    this.flight.price=0;
    this.flight.startDateTime;
    this.flight.endDateTime;
    this.flight.totalBusinessClassSeats=0;
    this.flight.totalNonBusinessClassSeats=0;
    this.flight.noOfRows=0;
    this.flight.mealType=' ';
    this.flight.scheduledDays=' ';
    //
  }
  Edit(): void
  {
    this.Errmsg='';
    this.flightService.UpdateFlightDetails(this.flight).subscribe(response=>{
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
    this.Errmsg="Flight Number: "+ this.flight.flightNumber + "  Details are updated.";
    this.flight.flightNumber=null;
    this.flight.airLine=' ';
    this.flight.intrument_Used=' ';
    this.flight.from_Place=' ';
    this.flight.to_Place=' ';
    this.flight.price=0;
    this.flight.startDateTime;
    this.flight.endDateTime;
    this.flight.totalBusinessClassSeats=0;
    this.flight.totalNonBusinessClassSeats=0;
    this.flight.noOfRows=0;
    this.flight.mealType=' ';
    this.flight.scheduledDays='';

  }
  Search():void
  {
    this.Errmsg='';
    let FlightId=this.flight.flightNumber;
    this.flightService.GetFlightById(FlightId).subscribe(response=>{
this.flight=response;
console.log(this.flight);
    })
    //

    //
  }
  Delete(): void{
    this.Errmsg='';
    let FlightId=this.flight.flightNumber;
    this.flightService.Delete(FlightId).subscribe(response=>{
this.flight=response;
console.log(this.flight);    
    })
    this.Errmsg="Flight Number: "+ this.flight.flightNumber + "  Deleted from the FLights List.";
    this.flight.flightNumber=null;
  }

}