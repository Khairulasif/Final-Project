import { Component, OnInit } from '@angular/core';
import { modelDepartment } from './modelDepartment';
import { AbsEmpServiceService } from './abs-emp-service.service';

@Component({
  selector: 'app-absent-employee',
  templateUrl: './absent-employee.component.html',
  styleUrls: ['./absent-employee.component.css']
})






export class AbsentEmployeeComponent implements OnInit{


  departmentList!: modelDepartment[];


  constructor(private services: AbsEmpServiceService) { }




  ngOnInit(): void {
    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
      console.log(this.departmentList) })
  }

}
