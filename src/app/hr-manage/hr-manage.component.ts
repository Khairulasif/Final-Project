import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { modelType } from './model';

@Component({
  selector: 'app-hr-manage',
  templateUrl: './hr-manage.component.html',
  styleUrls: ['./hr-manage.component.css']
})
export class HrManageComponent implements OnInit{

  postList!:modelType[] ;

  constructor(private services: PostService){}

  ngOnInit(): void {



    // this.services.getTask().subscribe((newPost: modelType[]) => {this.postList = newPost; console.log(this.postList)})

  }




  deleteTask(id:number) {
    this.services.delete(id).subscribe(res => {
         this.postList = this.postList.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })

}
}
