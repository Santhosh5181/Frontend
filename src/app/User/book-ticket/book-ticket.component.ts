import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { BookingService } from 'src/app/Services/booking.service';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})

export class BookTicketComponent implements OnInit {

  form: FormGroup;
  fId:number=localStorage["fId"];
  fromplace:string=localStorage["fromplace"];
  toplace:string=localStorage["toplace"];
  traveldate:Date=localStorage["traveldate"];
  isShown: boolean = true ; 
  isShown1: boolean = false ; 
  msg:string='';
  ticket:Ticket;
  tickets:Ticket[];
  email:string;
    constructor(private bookingService:BookingService,private router:Router) {
     
      this.ticket=new  Ticket();     
    }

  ngOnInit(): void {
   
  }
  Submit(bookingForm):void{
    this.isShown1=true;
    this.ticket.flightID=this.fId;
    this.ticket.from_Place=this.fromplace;
    this.ticket.to_Place=this.toplace;
    this.ticket.startDateTime=this.traveldate;

   console.log(this.ticket);

    this.bookingService.Book(this.ticket).subscribe(response=>{
      //this.tickets=response;
      console.log(response);
    },(error)=>{
      console.log(error);
    })
this.isShown=false;
    this.msg ="Tickets are confirmed from " + this.fromplace+ " To "
     +this.toplace+ " Journey Date is :" +this.traveldate;
    
    //  this.ticket.email='';
    //  this.ticket.noOfSeats=null;
    


  }
}