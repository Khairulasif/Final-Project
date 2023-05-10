import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { ProjectViewServiceService } from './project-view-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  id!: number;

  postList!: modelType;

  constructor(private services: ProjectViewServiceService,
  private route: ActivatedRoute,
  private router: Router
  ){}


  ngOnInit(): void {

    this.postList = {

      id:0,
      name:'',
      company:'',
      leader:'',
      // startDate:,
      // endDate:,
      status:'',
      budget:0,
      spent:0,
      remainingDay:0,
      remainingMoney:0,
      description:'',
      duration:'',
       
    }
   
    this.id = this.route.snapshot.params['postId'];

    this.services.find(this.id).subscribe((task:modelType) => {
      this.postList = task;
      console.log(this.postList);
    })
  }
}
