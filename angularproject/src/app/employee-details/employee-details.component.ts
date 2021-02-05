import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Object;

  constructor(private router: ActivatedRoute, private route: Router, private employeeService: EmployeeService) { }

  employeeFirstName: string;
  empData :any=[];

  ngOnInit() {
    this.employeeFirstName = this.router.snapshot.params['firstName'];
    this.getEmpByName();
  }

  /**
   * Service call for getting employee details by name
   */
  getEmpByName() {
    this.empData = this.employeeService.getEmployeeDetailsByFirstName(this.employeeFirstName);
   console.log(this.empData,"emp from ts file");
  }

  goToEmpList() {
    this.route.navigate(['/employeelist']);
  }
}
