import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { LoanListServiceService } from './loan-list-service.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit{

  searchhr:any;
  postList!: modelType[];

  constructor(private services: LoanListServiceService) { }

  ngOnInit(): void {
    this.services.getTask().subscribe((newPost: modelType[]) => {
       this.postList = newPost; console.log(this.postList) })

       console.log(this.postList);
  }

  


  deleteTask(id: number) {


    this.services.deleteTask(id).subscribe(res => {
       this.postList = this.postList.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
      //  this.services.getTask().subscribe((newPost: modelType[]) => {this.postList = newPost; console.log(this.postList)})
    })

  }

}
