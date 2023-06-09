import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelType } from './model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class LoanInstallmentServiceService {

  private url = 'http://localhost:8080/api';

  constructor(private httpService: HttpClient) {}

 

  addTask(task:modelType) {
    return this.httpService.post<modelType>(this.url + '/loaninstallmentadd' , task, httpOptions);
  }
}
