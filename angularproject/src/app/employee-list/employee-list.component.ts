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

  /**
   * Service call for getting all employee list from database
   */
  getAllEmployess() {
    console.log("bye");
    this.employeeList = this.employeeService.getEmployeesList();
  }

  /**
   * 
   * fetch Id for send it into url parameter to get particular emp details
   */
  employeeDetails(id: number) {
    console.log("id is ::::::::: " + id);
    this.route.navigate(['/employeedetails', id]);

  }

  /**
   * service call for delete particular employee by Employee Id
   */
  deleteEmployee(id: number) {
    console.log("inside delete com");
    this.employeeService.deleteEmpById(id);
    alert("Employee deleted with id : " + id);
    this.getAllEmployess();

  }

}
 
  

