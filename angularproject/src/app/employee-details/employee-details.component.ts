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

  employeeId: number;
  empD: any;
  

  ngOnInit() {
    this.employeeId = this.router.snapshot.params['id'];
    console.log(this.employeeId);
    this.getEmpById();

  }

  /**
   * Service call for getting employee details by Id
   */
  getEmpById() {
    this.empD = this.employeeService.getEmployeeDetailsById(this.employeeId);
  }

  goToEmpList() {
    this.route.navigate(['/employeelist']);
  }
}
