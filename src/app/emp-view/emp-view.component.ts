import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { modelType } from './model';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit{

  id!: number;

  postList!: modelType;

  constructor(private services: PostService,
  private route: ActivatedRoute,
  private router: Router
  ){}


  ngOnInit(): void {

    this.postList = {

      id:0,
      fname:'',
      lname:'',
      mobile:0,
      email:'',
      gender:'',
      role:'',
      nationality:'',
      nic:0,
      address:'',
      // image: 
    }
   
    this.id = this.route.snapshot.params['postId'];

    this.services.find(this.id).subscribe((task:modelType) => {
      this.postList = task;
    })
  }
}
