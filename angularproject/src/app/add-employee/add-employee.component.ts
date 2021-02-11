import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


model:AppModel;
arrors:any[];
  constructor(private http:HttpClient, private employeeService : EmployeeService,private route:Router) { 
    this.model=new AppModel();
    
  }
  ngOnInit() {
  }

  /**
   * save employee to database
   */
  onSaveClick(){
      console.log(this.model);
      this.employeeService.saveEmployeeToDb(this.model);
      this.route.navigate(['/employeelist']);

     }
     
}

export class AppModel{
 
  firstName:string;
  lastName:string;
  email:string;
  address:string;
}