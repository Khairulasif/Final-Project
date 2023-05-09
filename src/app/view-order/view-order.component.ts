import { Component, OnInit } from '@angular/core';


import { modelType } from './model';
import { PostService } from './post.service';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  viewList!:modelType[] ;

  constructor(private services: PostService){}

  ngOnInit(): void {



    this.services.getTask().subscribe((res) => {this.viewList = res; console.log(this.viewList)})

  }




  // deleteTask(id:number){
  //   this.services.delete(id).subscribe(res => {
  //        this.postList = this.postList.filter(item => item.id !== id);
  //        console.log('Post deleted successfully!');
  //   })

}

