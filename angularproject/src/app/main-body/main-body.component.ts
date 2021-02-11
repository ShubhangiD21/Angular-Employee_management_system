import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  showEmployeelist()
  {
    this.route.navigate(['/employeelist']);
  }

  addEmployee(){
    this.route.navigate(['/addemployee'])
  }

}




/**
<amexio-layout-grid >

  <amexio-grid-item style="width: 100%;" [name]="'gridheader'">
    <div class="grid-item-div">
      <a class="employee-list" routerLink="/employeelist">
        <b> Employee List</b>
      </a>
      <a class="add-employee" routerLink="/addemployee">
        <b> Add Employee </b>
      </a>
    </div>

  </amexio-grid-item>
</amexio-layout-grid>
 */