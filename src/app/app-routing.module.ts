
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFlightComponent } from './Admin/add-flight/add-flight.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

import { ViewFlightComponent } from './Admin/view-flight/view-flight.component';

import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';

import { LoginComponent } from './login/login.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { SearchFlightComponent } from './User/search-flight/search-flight.component';
import { CancelTicletComponent } from './User/cancel-ticlet/cancel-ticlet.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component';
import { GetFlightComponent } from './User/get-flight/get-flight.component';
import { RegisterComponent } from './register/register.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { NewformComponent } from './newform/newform.component';
import { EditFlightComponent } from './Admin/edit-flight/edit-flight.component';
import { ViewTicketComponent } from './User/view-ticket/view-ticket.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [

  // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',redirectTo:'loginnew',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'loginnew',component:LoginnewComponent},
 

  {path:'register',component:RegisterComponent},
  {path:'popup',component:PopupComponent},
  // {path:'admin-dashboard/:un',component:AdminDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'add-flight',component:AddFlightComponent},
  {path:'view-flight',component:ViewFlightComponent},
  {path:'newform',component:NewformComponent},
  {path:'edit-flight',component:EditFlightComponent}
  ]}, //un is a route parameter
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {path:'search-flight',component:SearchFlightComponent},
  {path:'cancel-ticket',component:CancelTicletComponent},
  {path:'book-ticket',component:BookTicketComponent},
  {path:'my-bookings',component:MyBookingsComponent},
  {path:'get-flight',component:GetFlightComponent},
  {path:'view-ticket',component:ViewTicketComponent}
 

  ]},
  // {path:'customer-dashboard',component:CustomerDashboardComponent},
  {path:'**',component:PathNotFoundComponent} //should be last path always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

