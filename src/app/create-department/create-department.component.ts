import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { DepartmentServiceService } from './department-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit{


  list!: modelType[];

  form2!: FormGroup;

  constructor(private services: DepartmentServiceService){}


  ngOnInit(): void {

    this.services.getTask().subscribe((newPost: modelType[]) => {this.list = newPost})

    this.form2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      
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
      
    })
  }

  delete(id:number) {
    this.services.deleteTask(id).subscribe(res =>{
      this.ngOnInit()
    })
  }
    
  }


