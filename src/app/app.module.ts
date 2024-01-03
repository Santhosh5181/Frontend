import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddFlightComponent } from './Admin/add-flight/add-flight.component';
import { ViewFlightComponent } from './Admin/view-flight/view-flight.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { SearchFlightComponent } from './User/search-flight/search-flight.component';
import { CancelTicletComponent } from './User/cancel-ticlet/cancel-ticlet.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component';
import { GetFlightComponent } from './User/get-flight/get-flight.component';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { ErrorInterceptorService } from './Services/error-interceptor.service';
import { RegisterComponent } from './register/register.component';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { NewformComponent } from './newform/newform.component';
import { EditFlightComponent } from './Admin/edit-flight/edit-flight.component';
import { ViewTicketComponent } from './User/view-ticket/view-ticket.component';
import { RameshComponent } from './ramesh/ramesh.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    ViewFlightComponent,
    AdminDashboardComponent,
    LoginComponent,
    PathNotFoundComponent,
    UserDashboardComponent,
    SearchFlightComponent,
    CancelTicletComponent,
    BookTicketComponent,
    MyBookingsComponent,
    GetFlightComponent,
    RegisterComponent,
    LoginnewComponent,
    NewformComponent,
    EditFlightComponent,
    ViewTicketComponent,
    RameshComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
