import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class AttenReportServiceService {

  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  getTask() : Observable<modelType[]> {
    const task = this.httpService.get<modelType[]>(this.url + '/departmentget');
    return task;
  }

  addTask(task:modelType) {
    return this.httpService.post<modelType>(this.url + '/addattenpost' , task, httpOptions);
  }

  updateTask(task:modelType) {

    return this.httpService.put<modelType>(this.url + '/departmentedit/' + task.id, task, httpOptions)
  }

  deleteTask(id:number) {

    return this.httpService.delete(this.url + '/departmendelete/'+ id)
  }

  findEmp(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/empgetforattendance/' + id)
  }
}