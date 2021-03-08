import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
import urlPath from "./Constants/constant";

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
    this.http.post(urlPath.AddEmployee, data).subscribe((params) => {
      console.log(params);
    });

  }

  /**
   * API Call for get All employees from DB (Read / fetch All  operation)
   */
  getEmployeesList(): any {
    console.log("inside allemp");
    let allEmp: any = [];
    this.http.get<{ [data: string]: Employee }>(urlPath.GetAllEmployess)
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
    console.log(id, "id from service ");
    let details = []
    this.http.get<{ [data: string]: Employee }>(urlPath.GetEmployeeByID + "/" + id)
      .subscribe(posts => {
        details.push(posts);
        console.log(posts,"data");
      })
      return details;
  }

  /**
   * 
   * Update Employee
   */
  updateEmployee(id:string,dataToUpdate:any){
    this.http.put(`${urlPath.UpdateEmployee}/${id}`,dataToUpdate)
    .subscribe((response) => {
      console.log("Updated the employee");
    });
    this.getEmployeesList();
  }

  /**
   *  API Call for detele particular employee from db based on Id (Delete operation)
   */
  deleteEmpById(id: string) {
    console.log("inside service deltet");
    this.http.delete(urlPath.deleteEmpployeeById + "/" + id)
      .subscribe(data => {
        console.log(data);
      })
  }

}

