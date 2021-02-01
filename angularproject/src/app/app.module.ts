import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    MainBodyComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmexioWidgetModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
