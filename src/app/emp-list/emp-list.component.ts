import { Component, OnInit } from '@angular/core';
import { EmplistServiceService } from './emplist-service.service';
import { modelType } from './model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {


  searchhr:any;
  postList!: modelType[];

  constructor(private services: EmplistServiceService) { }

  ngOnInit(): void {
    this.services.getTask().subscribe((newPost: modelType[]) => {
       this.postList = newPost; console.log(this.postList) })
  }

  


  deleteTask(id: number) {


    this.services.deleteTask(id).subscribe(res => {
       this.postList = this.postList.filter(item => item.employeeId !== id);
      console.log('Post deleted successfully!');
      //  this.services.getTask().subscribe((newPost: modelType[]) => {this.postList = newPost; console.log(this.postList)})
    })

  }
}
