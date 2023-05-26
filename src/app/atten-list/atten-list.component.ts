import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { AttenListServiceService } from './atten-list-service.service';
import { modelDepartment } from './modelDepartment';

@Component({
  selector: 'app-atten-list',
  templateUrl: './atten-list.component.html',
  styleUrls: ['./atten-list.component.css']
})
export class AttenListComponent implements OnInit{


  selectedDepartment!: string;
  selectedDate!: any;

  departmentList!: modelDepartment[];
  searchDepartment: any;
  searchhr: any;
  postList!: modelType[];

  constructor(private services: AttenListServiceService) { }

  ngOnInit(): void {

    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
      })
  



    this.services.getTask().subscribe((newPost: modelType[]) => {
       this.postList = newPost; console.log(this.postList) })
  }

  
  onSubmit(): void {
    
    console.log(this.selectedDepartment);

    this.services.getAttenByDepart(this.selectedDepartment).subscribe((newPost: modelType[]) => {
      this.postList = newPost; console.log(this.postList) })
  }

  onSubmitDate(): void {
    
    console.log(this.selectedDate);

    this.services.getAttenByDate(this.selectedDate).subscribe((newPost: modelType[]) => {
      this.postList = newPost; console.log(this.postList) })
  }

  deleteTask(id: number) {


    this.services.deleteTask(id).subscribe(res => {
       this.postList = this.postList.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
      //  this.services.getTask().subscribe((newPost: modelType[]) => {this.postList = newPost; console.log(this.postList)})
    })

  }

}
