import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from '../user';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  supplier_path=environment.login_path;
  constructor(private http:HttpClient) {
    
   }
   Register(user:User):Observable<any>
   {
     //https://flightacccountapi.azurewebsites.net/api/Account/register
     return this.http.post(this.supplier_path+'register',user);
     console.log(user);
   }
}
