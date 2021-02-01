import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  employeeId:any;
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  this.employeeId = this.route.snapshot.params['id'];
  }

}
