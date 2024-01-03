import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';
import { environment } from 'src/environments/environment';
import { Flight } from '../Models/flight';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  supplier_path=environment.bookings_path;
  flights_path=environment.flights_path;
  constructor(private http:HttpClient) { }
  GetAllFlights1():Observable<Flight[]>
  {
    return this.http.get<Flight[]>(this.supplier_path+'GetAllFlights');
  }

  Book(book:Ticket):Observable<any>
  {
    console.log(book);
    return this.http.post(this.supplier_path+'Book',book);
  }

 

  Cancel(PNR: string):Observable<any>
  {
  
    console.log(PNR);
    return this.http.get(this.supplier_path+'Cancel?PNR='+PNR);
  }

  MyBookings(Email: string):Observable<any>
  {
  
    console.log(Email);
    return this.http.get(this.supplier_path+'MyBookings?Email='+Email);
  }
  SearchFlight(FromPlace:string,ToPlace:string):Observable<any>
  {
    
     return this.http.get(this.flights_path+'Search?FromPlace='+FromPlace+'&ToPlace='+ToPlace);
  }

  ViewTicket(Pnr: string):Observable<any>
  {
  
    console.log(Pnr);
    return this.http.get(this.supplier_path+'ViewTicket?Pnr='+Pnr);
  }

}
