import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor(private http: HttpClient) { }
  allEmployess: Employee[] = [];
  empData: any;
  ngOnInit() {
  }

  /**
   * API Call for save employee details into DB (Insert operation) 
   */
  saveEmployeeToDb(data) {
    console.log("inside service of add");
    this.http.post("http://localhost:8080/saveEmployee", data).subscribe((params) => {
      console.log(params);
    });

  }

  /**
   * API Call for get All employees from DB (Read / fetch All  operation)
   */
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

  /**
   * API Call for get particular employee details by id
   */
  getEmployeeDetailsById(id: string): any {
    console.log(id, "firstName from service ");
    let detail: any = [];
    this.http.get<{ [data: string]: Employee }>("http://localhost:8080/findById" + "/" + id)
      .pipe(map(responseData => {
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            detail.push({ ...responseData[key], k: key })
          }
        }
        return detail;
      }))
      .subscribe(posts => {
        console.log(detail);
      })
    return detail;
  }

  /**
   *  API Call for detele particular employee from db based on Id (Delete operation)
   */
  deleteEmpById(id: number) {
    console.log("inside service deltet");
    this.http.delete("http://localhost:8080/deleteEmpById" + "/" + id)
      .subscribe(data => {
        console.log(data);
      })
  }

}


