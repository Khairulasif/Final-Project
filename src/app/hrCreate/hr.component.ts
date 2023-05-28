import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EmpServiceService } from './emp-service.service';
import { modelDepartment } from './modelDepartment';
import { modelDesignation } from './modelDesignation';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {



  gradeA : number = 20000; 
  gradeB : number = 30000; 
  gradeC : number = 40000; 

  designationList !: modelDesignation[];

  departmentList !: modelDepartment[];

  form2 !: FormGroup;

  constructor(public services: EmpServiceService, private router: Router){}


  ngOnInit(): void {


    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
    this.departmentList = newPost;
    console.log(this.departmentList) })

    this.services.getDesignation().subscribe((newPost: modelDesignation[]) => {
      this.designationList = newPost;
      console.log(this.designationList) })

    this.form2 = new FormGroup({
    employeeId: new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    department:new FormControl(),
    designation:new FormControl(),
    
    nationality:new FormControl(),
    nic:new FormControl(),
    address:new FormControl(),
    dateOfBirth:new FormControl(),
    joiningDate:new FormControl(),
    basicSalary:new FormControl(),
    // image:new FormControl(),
    })
  }

  basicSalaries: any;

  salaryGet() {

   
    
    
    if(this.form2.value.designation == "Junior Officer" ) {
      this.basicSalaries = this.gradeA
      
    }
    if(this.form2.value.designation == "Senior Officer" ) {
      this.basicSalaries = this.gradeB
    }
    if(this.form2.value.designation == "Cheif Executive Officer" ) {
      this.basicSalaries = this.gradeC
    }
  }

  

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('employeeList');
    })

}
}
