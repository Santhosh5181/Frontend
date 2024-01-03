import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import { Ticket } from '../../Models/ticket';
import { BookingService } from 'src/app/Services/booking.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
  tickets:Ticket[]
  ticket:Ticket;
  errmsg:string='';
  Email:string;
  sourcePath: string;
  fileName:string;
  constructor(private bookingService:BookingService,private router:Router) {
    this.Email=localStorage["email"];
   }

  ngOnInit(): void {
    this.Email=this.Email;
    this.bookingService.MyBookings(this.Email).subscribe(response=>{
      this.tickets=response;
      console.log(response);
    })
  }
  Cancel(item):void{
    console.log(item.pnr);
    this.bookingService.Cancel(item.pnr).subscribe(response=>{
      this.Email=this.Email;
      this.bookingService.MyBookings(this.Email).subscribe(response=>{
        this.tickets=response;
      })
      console.log(response);
     
    },(error)=>{
      console.log(error);
    })


  }
 // @ViewChild('content') content: ElementRef;  
  Download(item):void {
   


    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jspdf('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('Ticket.pdf');
    });     
    }  

    View(item):void{
      console.log(item);

          let pnr = item.pnr;
          localStorage["pnr"]=pnr;

          // let status = item.toPlace;
          // let s = item.pnr;

console.log(pnr);
      this.router.navigateByUrl('/user-dashboard/view-ticket');
    }
  
   

}
