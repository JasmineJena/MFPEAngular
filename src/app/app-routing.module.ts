import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { EmpdashComponent } from './empdash/empdash.component';
import { CreatecustComponent } from './empdash/createcust/createcust.component';
import { CreateacctComponent } from './empdash/createacct/createacct.component';
import { DeletecustComponent } from './empdash/deletecust/deletecust.component';
import { ViewcustComponent } from './empdash/viewcust/viewcust.component';
import { DepositComponent } from './empdash/deposit/deposit.component';
import { ChargesComponent } from './empdash/charges/charges.component';
import { CustdashComponent } from './custdash/custdash.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'home', component: HomeComponent},
  { path: 'custdash', component: CustdashComponent},
  { path: 'createcust', component: CreatecustComponent},
  { path: 'createacct', component: CreateacctComponent},
  { path: 'deletecust', component: DeletecustComponent},
  { path: 'charges', component: ChargesComponent},
  { path: 'empdash', component: EmpdashComponent},
  { path: 'viewcust', component: ViewcustComponent},
  { path: 'deposit', component: DepositComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
