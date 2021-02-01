import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'employeelist' ,component:EmployeeListComponent},
    {path:'addemployee',component:AddEmployeeComponent},
    {path:'updateemployee/:id',component:UpdateEmployeeComponent},
    {path:'employeedetails/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
