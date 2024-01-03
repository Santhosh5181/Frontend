import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import { Ticket } from '../../Models/ticket';


@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  flights:Flight[];
  flights1:Flight[];
  tickets:Ticket[]
  ticket:Ticket;
  errmsg:string='';
  constructor(private flightService:FlightService,private router:Router) {
    this.ticket=new Ticket();
   }

  ngOnInit(): void {
    this.flightService.GetAllFlights1().subscribe(response=>{
      this.flights=response;
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }
  
  Search(item):void
  { 
    let fId=item.flightNumber;
    let fromplace=item.from_Place;
    let toplace=item.to_Place;
    let traveldate=item.startDateTime;
    localStorage["fId"]=fId;
    localStorage["fromplace"]=fromplace;
    localStorage["toplace"]=toplace;
    localStorage["traveldate"]=traveldate;
        console.log(localStorage["fId"]);
        console.log(localStorage["fromplace"]);
        console.log(localStorage["toplace"]);
        console.log(localStorage["traveldate"]);

     
       this.router.navigateByUrl('user-dashboard/book-ticket');
  }

}