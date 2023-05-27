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

  searchhr: any;

  postList!: modelType[];
  
  departmentList!: modelDepartment[];

  currentDate!: Date;

  constructor(private services: AbsEmpServiceService) {
   
   }




  ngOnInit(): void {
    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
       })

       this.services.getTask().subscribe((newPost: modelType[]) => {
        this.postList = newPost; console.log(this.postList)})

       
  }

  saveAbsent(){
    this.services.saveAbsEmp(this.postList).subscribe(
      () => console.log("data saved"),
      (error: any) =>  console.log("Error saving data", error),
      
    );
  }

}
