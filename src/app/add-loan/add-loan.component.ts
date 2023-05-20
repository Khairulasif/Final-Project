import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';
import { modelType } from './model';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit{

  list!: modelType[];

  form2!: FormGroup;

  constructor(public services: ServiceService, private router: Router) { }



  ngOnInit(): void {

    

    this.form2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      loanAmount: new FormControl(''),
      approveDate: new FormControl(''),
      installmentPeriod: new FormControl(''),
      installmentAmount: new FormControl(''),
      loanNo: new FormControl(''),
      status: new FormControl(),
      loanDetail: new FormControl(),
      

    })
    this.editData=false;


  }

  editData: boolean = false;
  submit() {
    console.log(this.form2.value)

      if(this.form2.value.id === null) {
        this.services.addTask(this.form2.value).subscribe(res => {

this.ngOnInit();

        })
      } else {

        this.services.updateTask(this.form2.value).subscribe(res => {
          this.ngOnInit();


        })
      }
  }

  edit(task:modelType) {
    this.editData=true;
    this.form2 = new FormGroup({
      id: new FormControl(task.id),
      name: new FormControl(task.name),
      loanAmount: new FormControl(task.loanAmount),
      approveDate: new FormControl(task.approveDate),
      installmentPeriod: new FormControl(task.installmentPeriod),
      installmentAmount: new FormControl(task.installmentAmount),
      loanNo: new FormControl(task.loanNo),
      status: new FormControl(task.status),
      loanDetail: new FormControl(task.loanDetail),
      
    })
  }

  delete(id:number) {
    this.services.deleteTask(id).subscribe(res =>{
      this.ngOnInit()
    })
  }





  // onSelected(value:string) {
  //   this. = value;
  // }

}
