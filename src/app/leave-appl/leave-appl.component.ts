import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { LeaveAppServiceService } from './leave-app-service.service';

@Component({
  selector: 'app-leave-appl',
  templateUrl: './leave-appl.component.html',
  styleUrls: ['./leave-appl.component.css']
})
export class LeaveApplComponent implements OnInit{

  postList!: modelType[];

  constructor(private services: LeaveAppServiceService) { }

  ngOnInit(): void {
    this.services.getTask().subscribe((newPost: modelType[]) => {
       this.postList = newPost; console.log(this.postList) })
  }


}
