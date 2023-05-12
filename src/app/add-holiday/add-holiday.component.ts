import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddHolidayServiceService } from './add-holiday-service.service';
import { Router } from '@angular/router';
import { modelType } from './model';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {


  postList!: modelType[];
  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: AddHolidayServiceService, private router: Router) { }


  ngOnInit(): void {

    this.services.getTask().subscribe((newPost: modelType[]) => {
      this.postList = newPost; console.log(this.postList)
    })

    this.form2 = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      days: new FormControl(),


    })

    this.editData=false;
  }

  editData: boolean = false;


  edit(task:modelType) {
    this.editData=true;
    this.form2 = new FormGroup({
      id: new FormControl(task.id),
      name: new FormControl(task.name),
      
      startDate: new FormControl(task.startDate),
      endDate: new FormControl(task.endDate),
      days: new FormControl(task.days),
      
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
