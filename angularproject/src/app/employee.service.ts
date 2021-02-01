import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor(private http: HttpClient) { }
  allEmployess: Employee[] = [];
  empData: any;
  ngOnInit() {
    //  this.getEmployeesList();
  }


  saveEmployeeToDb(data) {
    console.log("inside service of add");
    this.http.post("http://localhost:8080/saveEmployee", data).subscribe((params) => {
      console.log(params);
    });

  }


  getEmployeesList(): any {
    console.log("inside allemp");
    let allEmp: any = [];
    this.http.get<{ [data: string]: Employee }>("http://localhost:8080/getAllEmployee")
      .pipe(map(resData => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            allEmp.push({ ...resData[key], k: key })
          }
        }
        return allEmp;
      }))
      .subscribe((allEmployeedetails) => {
        console.log(allEmployeedetails);
      })

    return allEmp;
  }

  getEmployeeDetailsById(id: number): any {
    console.log(id,"id from service ");
    this.http.get<{ [data: string]: Employee }>("http://localhost:8080/getEmpById" + "/" + id)
      .subscribe(data => {
        this.empData = data;
      })
    let detail = this.empData;
    console.log(detail, "detailll");
    return detail;
  }


  deleteEmpById(id: number) {
    console.log("inside service deltet");
    this.http.delete("http://localhost:8080/deleteEmpById" + "/" + id)
      .subscribe(data => {
        console.log(data);
      })
  }




}
