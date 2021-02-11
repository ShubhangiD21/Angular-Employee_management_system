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

  employeeid: string;
  empData :any=[];

  ngOnInit() {
    this.employeeid = this.router.snapshot.params['id'];
    this.getEmpById();
  }

  /**
   * Service call for getting employee details by name
   */
  getEmpById() {
    this.empData = this.employeeService.getEmployeeDetailsById(this.employeeid);
   console.log(this.empData,"emp from ts file");
  }

  goToEmpList() {
    this.route.navigate(['/employeelist']);
  }
}
