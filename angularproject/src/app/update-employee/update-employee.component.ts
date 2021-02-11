import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
model:AppModel;

  constructor(private router: ActivatedRoute, private route: Router, private employeeService: EmployeeService) {
    this.model=new AppModel();
   }

  employeeid:string;
  ngOnInit() {
    this.employeeid = this.router.snapshot.params['id'];
  //  this.updateEmployee();
  }
 // updateEmployee(){
   // console.log("this id is from update component  ", this.employeeid);
   // this.employeeService.updateEmployee(this.employeeid);
  //}

  onSaveClick(){
console.log(this.model,"data from update component");
this.employeeService.updateEmployee(this.employeeid,this.model);
this.route.navigate(['/employeelist']);
  }

}


export class AppModel{
  email:string;
  address:string;
}