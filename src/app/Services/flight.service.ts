import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../Models/flight';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';
import { Login } from '../login';
import { User } from '../user';
import { AuthUser } from '../Models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  supplier_path=environment.flights_path;
  login_path=environment.login_path;
 // register_path=environment.register_path;

  constructor(private http:HttpClient) { }

  GetAllFlights1():Observable<Flight[]>
  {
    return this.http.get<Flight[]>(this.supplier_path+'GetAllFlights');
  }
  AddFlight(flight:Flight):Observable<any>
  {
    console.log(flight);
    return this.http.post(this.supplier_path+'register',flight);
  }
  GetFlightById(FlightId:number):Observable<Flight>
  {
    return this.http.get<Flight>(this.supplier_path+'GetFlightById?FlightId='+FlightId);
  }
  UpdateFlightDetails(flight:Flight):Observable<any>
  {
    //http://localhost:22484/api/Flight/UpdateFlightDetails
    return this.http.put(this.supplier_path+'UpdateFlightDetails',flight);
  }
  Delete(FlightId:number):Observable<Flight>
  {
    return this.http.get<Flight>(this.supplier_path+'Delete?FlightId='+FlightId);
  }
  //Login

  // Validate(login:Login):Observable<AuthUser>
  // {
  //     return this.http.post<AuthUser>(this.login_path,login);
  // }

  Validate(login:Login):Observable<AuthUser>
  {
      return this.http.post<AuthUser>(this.login_path+'Validate',login);
  }
 
  
}
