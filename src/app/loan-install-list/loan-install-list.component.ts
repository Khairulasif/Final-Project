import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { LoanListServiceService } from './loan-list-service.service';

@Component({
  selector: 'app-loan-install-list',
  templateUrl: './loan-install-list.component.html',
  styleUrls: ['./loan-install-list.component.css']
})
export class LoanInstallListComponent implements OnInit{

  searchDepartment: any;
  searchhr: any;
  postList!: modelType[];

  constructor(private services: LoanListServiceService) { }

  ngOnInit(): void {
    this.services.getTask().subscribe((newPost: modelType[]) => {
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
