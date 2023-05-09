import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { DisciplineServiceService } from './discipline-service.service';

@Component({
  selector: 'app-dicipline',
  templateUrl: './dicipline.component.html',
  styleUrls: ['./dicipline.component.css']
})
export class DiciplineComponent implements OnInit{


  list!: modelType[];

  form2!: FormGroup;

  constructor(private services: DisciplineServiceService){}


  ngOnInit(): void {

    this.services.getTask().subscribe((newPost: modelType[]) => {this.list = newPost})

    this.form2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      action: new FormControl(''),
      type: new FormControl(''),
      description: new FormControl(''),
      
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
      
      action: new FormControl(task.action),
      type: new FormControl(task.type),
      description: new FormControl(task.description),
      
    })
  }

  delete(id:number) {
    this.services.deleteTask(id).subscribe(res =>{
      this.ngOnInit()
    })
  }
}
