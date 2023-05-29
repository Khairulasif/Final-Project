import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelType } from './model';
import { modelAllowance } from './modelAllowance';
import { modelDeduct } from './modelDeduction';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GenSalaryServiceService {
 

   private url = 'http://localhost:8080/api';


  constructor(private httpService: HttpClient) {}

  // getTask() : Observable<modelType[]> {
  //   const task = this.httpService.get<modelType[]>(this.url + '/departmentget');
  //   return task;
  // }

  addTask(task:modelType) {
    return this.httpService.post<modelType>(this.url + '/salaryAdd' , task, httpOptions);
  }

  // updateTask(task:modelType) {

  //   return this.httpService.put<modelType>(this.url + '/departmentedit/' + task.departmentId, task, httpOptions)
  // }

  // deleteTask(id:number) {

  //   return this.httpService.delete(this.url + '/departmendelete/'+ id)
  // }

  find(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/empGetByIdForSalary/' + id)
  }


  findDeductInf(id: number, selectedMonth: string) : Observable<modelDeduct> {

    const endpoint = '/deductions';
    const params = `?id=${id}&selectedMonth=${selectedMonth}`;


    return this.httpService.get<modelDeduct>(this.url + endpoint + params)
  }


  findAllowanceInf(id: number, selectedMonth: string) : Observable<modelAllowance> {
    const endpoint = '/allowances';
    const params = `?id=${id}&selectedMonth=${selectedMonth}`;


    return this.httpService.get<modelAllowance>(this.url + endpoint + params)
  }

  

}
