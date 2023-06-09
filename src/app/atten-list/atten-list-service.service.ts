import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelType } from './model';
import { modelDepartment } from './modelDepartment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AttenListServiceService {
  
  

  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  getTask() : Observable<modelType[]> {
    const task = this.httpService.get<modelType[]>(this.url + '/attendanceList');
    return task;
  }

  addTask(task:modelType) {
    return this.httpService.post<modelType>(this.url + '/emppost' , task, httpOptions);
  }

  updateTask(task:modelType) {

    return this.httpService.put<modelType>(this.url + '/posts/' + task.id, task, httpOptions)
  }

  deleteTask(id:number) {

    return this.httpService.delete(this.url + '/attenlistdelete/'+ id)
  }

  getAttenByDepart(department:String) {
    return this.httpService.get<modelType[]>(this.url + '/getByDepartment/' + department)
  }

  getDepartment() : Observable<modelDepartment[]> {
    const task = this.httpService.get<modelDepartment[]>(this.url + '/departmentget');
    return task;
  }

  getAttenByDate(selectedDate: any) {
    return this.httpService.get<modelType[]>(this.url + '/getByDate/' + selectedDate)
  }

  

  // find(id:number) : Observable<any>{
  //   return this.httpService.get(this.url + '/departmentget/' + id)
  // }
}
