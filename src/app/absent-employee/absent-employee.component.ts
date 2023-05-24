import { Component, OnInit } from '@angular/core';
import { modelDepartment } from './modelDepartment';
import { AbsEmpServiceService } from './abs-emp-service.service';
import { modelType } from './model';

@Component({
  selector: 'app-absent-employee',
  templateUrl: './absent-employee.component.html',
  styleUrls: ['./absent-employee.component.css']
})






export class AbsentEmployeeComponent implements OnInit{

  postList!: modelType[];
  
  departmentList!: modelDepartment[];

  currentDate!: Date;

  constructor(private services: AbsEmpServiceService) {
    this.currentDate = new Date();
   }




  ngOnInit(): void {
    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
       })

       this.services.getTask().subscribe((newPost: modelType[]) => {
        this.postList = newPost; console.log(this.postList) })

        
  }

 

}
