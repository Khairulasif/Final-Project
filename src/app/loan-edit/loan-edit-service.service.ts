import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelType } from './model';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoanEditServiceService {

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

    return this.httpService.put<modelType>(this.url + '/loanedit/' + task.id, task, httpOptions)
  }

  deleteTask(id:number) {

    return this.httpService.delete(this.url + '/loandelete/'+ id)
  }

  find(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/loanlist/' + id)
  }
}
