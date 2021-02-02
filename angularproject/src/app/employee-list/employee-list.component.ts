import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EmployeeService } from '../employee.service';
import { Employee } from "../employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any[];
  constructor(private route: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployess();
  }

  getAllEmployess() {
    console.log("bye");
    this.employeeList = this.employeeService.getEmployeesList();
  }

  employeeDetails(id: number) {
    console.log("id is ::::::::: " + id);
    this.route.navigate(['/employeedetails', id]);

  }

  deleteEmployee(id: number) {
    console.log("inside delete com");
    this.employeeService.deleteEmpById(id);
    alert("Employee deleted with id : " + id);
    this.getAllEmployess();

  }


}
 
  

