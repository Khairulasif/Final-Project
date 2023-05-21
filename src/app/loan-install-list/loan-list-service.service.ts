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
export class LoanListServiceService {

  private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  getTask() : Observable<modelType[]> {
    const task = this.httpService.get<modelType[]>(this.url + '/loaninstallmentlistget');
    return task;
  }

  deleteTask(id:number) {

    return this.httpService.delete(this.url + '/loanistallmentdelete/'+ id)
  }
}
