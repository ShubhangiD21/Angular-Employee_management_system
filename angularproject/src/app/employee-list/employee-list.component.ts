import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any[];
  empData: any = [];
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
   * fetch id for send it into url parameter to get particular emp details
  */
  employeeDetails(id: string) {
    console.log("id is ::::::::: " + id);
    this.route.navigate(['/employeedetails', id]);
  }

  /**
   * service call for delete particular employee by Employee Id
   */
  deleteEmployee(id: string) {
    console.log("inside delete com");
    this.employeeService.deleteEmpById(id);
    alert("Employee deleted with id : " + id);
    this.getAllEmployess();
  }

  updateEmployee(id:number){
    this.route.navigate(['/updateemployee',id])
  }

}
