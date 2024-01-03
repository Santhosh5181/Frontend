import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import { Ticket } from '../../Models/ticket';
import { BookingService } from 'src/app/Services/booking.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-flight',
  templateUrl: './get-flight.component.html',
  styleUrls: ['./get-flight.component.css']
})
export class GetFlightComponent implements OnInit {
  flights:Flight[];
  flight:Flight;
  tickets:Ticket[]
  ticket:Ticket;
  errmsg:string='';
  from_Place:string;
  to_Place:string;
  isShown=false;
  getForm:FormGroup;

  constructor(private bookingService:BookingService,private router:Router) {
//
// this.getForm=frmbuilder.group({  
          
//         fplace:['',[Validators.required,Validators.minLength(10)]],  
//         tplace:['',[Validators.required,Validators.minLength(10)]],  

//       });  
//   }
//
  }

  ngOnInit(): void {
  }
  SearchFlight(): void{
    if(this.isShown==false)
    {
      this.isShown=true;
    }
   this.from_Place=this.from_Place;
   this.to_Place=this.to_Place;
    this.bookingService.SearchFlight(this.from_Place,this.to_Place).subscribe(response=>{
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
