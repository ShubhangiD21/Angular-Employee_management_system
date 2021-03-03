import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"],
})
export class UpdateEmployeeComponent implements OnInit {
  model: AppModel;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private employeeService: EmployeeService
  ) {
    this.model = new AppModel();
  }

  employeeid: string;
  ngOnInit() {
    this.employeeid = this.router.snapshot.params["id"];
    //  this.updateEmployee();
  }
  

  onUpdateClick() {
    console.log(this.model, "data from update component");
    this.employeeService.updateEmployee(this.employeeid, this.model);
    alert("Employee Information updated successfully!!!");
    this.route.navigate(["/employeelist"]);
  }
  handleCancel(){
    this.route.navigate(["/employeelist"]);
  }
}

export class AppModel {
  email: string;
  address: string;
}
