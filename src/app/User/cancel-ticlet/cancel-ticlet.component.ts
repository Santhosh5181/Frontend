import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import { Ticket } from '../../Models/ticket';
import { BookingService } from 'src/app/Services/booking.service';
import { FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cancel-ticlet',
  templateUrl: './cancel-ticlet.component.html',
  styleUrls: ['./cancel-ticlet.component.css']
})
export class CancelTicletComponent implements OnInit {
  //
  form: FormGroup; 
  //
  tickets:Ticket[]
  ticket:Ticket;
  errmsg:string='';
  PNR:string;
  Errmsg: string;
  constructor(private bookingService:BookingService,private router:Router) { 


  }
  
  ngOnInit(): void {


  }
  Submit(cancelForm) {
    // console.log(loginForm.pnr.touched);
    // if (loginForm.Pnr.touched) {
    //   console.log('form submitted');

      //
          console.log(cancelForm.PNR);
    this.bookingService.Cancel(this.PNR).subscribe(response=>{
    
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
 
    this.Errmsg="Tickets has been Cancelled for this PNR:  "+this.PNR;
    //this.PNR='';
    //
    }
  
    //  else
    //  {
    //   console.log('form Not submitted');
    // }

 
  Cancel():void{
    
    console.log(this.PNR);
    this.bookingService.Cancel(this.PNR).subscribe(response=>{
    
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })
 
    this.Errmsg="Tickets has been Cancelled for this PNR:  "+this.PNR;
    this.PNR='';
  }

}
