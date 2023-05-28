import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelDepartment } from './modelDepartment';
import { Observable } from 'rxjs';
import { modelType } from './model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  // getTask() : Observable<modelType[]> {
  //   const task = this.httpService.get<modelType[]>(this.url + '/departmentget');
  //   return task;
  // }

  // addTask(task:modelType) {
  //   return this.httpService.post<modelType>(this.url + '/departmentpost' , task, httpOptions);
  // }

  // updateTask(task:modelType) {

  //   return this.httpService.put<modelType>(this.url + '/departmentedit/' + task.departmentId, task, httpOptions)
  // }

  // deleteTask(id:number) {

  //   return this.httpService.delete(this.url + '/departmendelete/'+ id)
  // }

  // find(id:number) : Observable<any>{
  //   return this.httpService.get(this.url + '/departmentget/' + id)
  // }

  getDepartment() : Observable<modelDepartment[]> {
    const task = this.httpService.get<modelDepartment[]>(this.url + '/departmentget');
    return task;
  }

  getpaidByDepart(department:String) {
    return this.httpService.get<modelType[]>(this.url + '/getByDepartment/' + department)
  }

  getpaidByMonth(selectedMonth: any) {
    return this.httpService.get<modelType[]>(this.url + '/getByDate/' + selectedMonth)
  }
}
