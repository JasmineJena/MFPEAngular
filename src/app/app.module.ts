import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { EmpdashComponent } from './empdash/empdash.component';
import { CreatecustComponent } from './empdash/createcust/createcust.component';
import { CreateacctComponent } from './empdash/createacct/createacct.component';
import { DeletecustComponent } from './empdash/deletecust/deletecust.component';
import { ViewcustComponent } from './empdash/viewcust/viewcust.component';
import { DepositComponent } from './empdash/deposit/deposit.component';
import { ChargesComponent } from './empdash/charges/charges.component';
import { CustdashComponent } from './custdash/custdash.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    EmpdashComponent,
    CreatecustComponent,
    CreateacctComponent,
    DeletecustComponent,
    ViewcustComponent,
    DepositComponent,
    ChargesComponent,
    CustdashComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
