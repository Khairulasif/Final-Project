import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { LeaveAppServiceService } from './leave-app-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave-appl',
  templateUrl: './leave-appl.component.html',
  styleUrls: ['./leave-appl.component.css']
})
export class LeaveApplComponent implements OnInit {

  postList!: modelType[];

  editItem!: any;

  form !: any;

  constructor(private services: LeaveAppServiceService) { }

  ngOnInit(): void {
    this.services.getTask().subscribe((newPost: modelType[]) => {
      this.postList = newPost;
    })




  }





  approveItem(item: any) {
    item.status = 'Approved';

    console.log(item);

    this.services.updateTaskApprove(item).subscribe((res: any) => {
     
        this.ngOnInit();
      })

    
    

  }

  rejectItem(item: any) {
    item.status = 'Rejected';

    this.services.updateTaskReject(item).subscribe((res: any) => {
      
        this.ngOnInit();
      })
   

  }




}
function updateTask() {
  throw new Error('Function not implemented.');
}

