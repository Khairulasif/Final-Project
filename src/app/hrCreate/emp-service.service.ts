import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelType } from './model';
import { Observable } from 'rxjs';
import { modelDepartment } from './modelDepartment';
import { modelDesignation } from './modelDesignation';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EmpServiceService {

  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  getTask() : Observable<modelType[]> {
    const task = this.httpService.get<modelType[]>(this.url + '/empget');
    return task;
  }

  addTask(task:modelType) {
    return this.httpService.post<modelType>(this.url + '/emppost' , task, httpOptions);
  }

  updateTask(task:modelType) {

    return this.httpService.put<modelType>(this.url + '/posts/' + task.id, task, httpOptions)
  }

  deleteTask(id:number) {

    return this.httpService.delete(this.url + '/empdelete/'+ id)
  }


  getDepartment() : Observable<modelDepartment[]> {
    const task = this.httpService.get<modelDepartment[]>(this.url + '/departmentget');
    return task;
  }

  getDesignation() : Observable<modelDesignation[]> {
    const task = this.httpService.get<modelDesignation[]>(this.url + '/designationget');
    return task;
  }
}
