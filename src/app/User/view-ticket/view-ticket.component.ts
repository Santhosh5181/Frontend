import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Flight } from 'src/app/Models/flight';
import { FlightService } from 'src/app/Services/flight.service';
import { Router } from '@angular/router';
import { Ticket } from '../../Models/ticket';
import { BookingService } from 'src/app/Services/booking.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  tickets:Ticket[] 
  ticket:Ticket;
  Pnr:string;
  @ViewChild('htmlData') htmlData:ElementRef;
  constructor(private bookingService:BookingService,private router:Router) { 
    this.ticket=new Ticket();  
  }

  ngOnInit(): void {
    console.log(localStorage["pnr"+"view ticket page"]);
    this.Pnr=localStorage["pnr"];
    this.bookingService.ViewTicket(this.Pnr).subscribe(response=>{
      this.tickets=response;
      console.log(response);
    })
  }

  Download():void{
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jspdf('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('E-Ticket.pdf');
    });     
    }  

}


