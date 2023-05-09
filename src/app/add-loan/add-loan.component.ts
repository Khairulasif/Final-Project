import { Component, OnInit } from '@angular/core';
import { modelType } from '../view-order/model';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent {

//   list!: modelType[];

//   form2!: FormGroup;

//   constructor(private services: ServiceService){}



//   ngOnInit(): void {

//     // this.services.getTask().subscribe((newPost: modelType[]) => {this.list = newPost})

//     this.form2 = new FormGroup({
//       id: new FormControl(),
//       name: new FormControl(''),
//       email: new FormControl(''),
//       password: new FormControl(''),
//       gender: new FormControl(''),
//       address: new FormControl(''),
//       jobRole: new FormControl(''),
//       csh: new FormControl(),
//       jee: new FormControl(),
//       ddd: new FormControl(),

//     })
//     this.editData=false;


//   }

//   editData: boolean = false;
//   submit() {
//     console.log(this.form2.value)

//       if(this.form2.value.id === null) {
//         this.services.addTask(this.form2.value).subscribe(res => {

// this.ngOnInit();

//         })
//       } else {

//         this.services.updateTask(this.form2.value).subscribe(res => {
//           this.ngOnInit();


//         })
//       }
//   }

//   edit(task:modelType) {
//     this.editData=true;
//     this.form2 = new FormGroup({
//       id: new FormControl(task.id),
//       name: new FormControl(task.name),
//       email: new FormControl(task.email),
//       password: new FormControl(task.password),
//       gender: new FormControl(task.gender),
//       address: new FormControl(task.address),
//       jobRole: new FormControl(task.jobRole),
//       csh: new FormControl(task.csh),
//       jee: new FormControl(task.jee),
//       ddd: new FormControl(task.ddd),

//     })
//   }

//   delete(id:number) {
//     this.services.deleteTask(id).subscribe(res =>{
//       this.ngOnInit()
//     })
//   }





//   // onSelected(value:string) {
//   //   this. = value;
//   // }

}
