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
export class EditInstallmentService {


  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  updateTask(task:modelType) {

    return this.httpService.put<modelType>(this.url + '/loanedit/' + task.id, task, httpOptions)
  }

  find(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/loaninstallmentlist/' + id)
  }
}
