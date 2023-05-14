import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EmpServiceService } from './emp-service.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  
  form2 !: FormGroup;

  constructor(public services: EmpServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    id: new FormControl(),
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

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('employeeList');
    })

}
}
