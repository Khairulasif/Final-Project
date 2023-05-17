import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit{
  

  postList!: modelType[];
  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: ServiceService, private router: Router) { }


  ngOnInit(): void {

    this.services.getTask().subscribe((newPost: modelType[]) => {
      this.postList = newPost; console.log(this.postList)
    })

    this.form2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
      retypePassword: new FormControl(),


    })

    this.editData=false;
  }

  editData: boolean = false;


  edit(task:modelType) {
    this.editData=true;
    this.form2 = new FormGroup({
      id: new FormControl(task.id),
      name: new FormControl(task.name),
      email: new FormControl(task.email),
      
      userName: new FormControl(task.userName),
      password: new FormControl(task.password),
      retypePassword: new FormControl(task.retypePassword),
      
    })
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res: any) => {
      console.log('Post created successfully');
      this.ngOnInit();
      // this.router.navigateByUrl('holidayList');
    })

  }

  deleteTask(id: number) {


    this.services.deleteTask(id).subscribe(res => {
       this.postList = this.postList.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
      //  this.services.getTask().subscribe((newPost: modelType[]) => {this.postList = newPost; console.log(this.postList)})
    })

  }

}
