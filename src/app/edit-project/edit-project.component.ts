import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { modelType } from './model';
import { ProjectEditServiceService } from './project-edit-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    status:new FormControl(),
    company:new FormControl(),
    leader:new FormControl(),
    budget:new FormControl(),
    spent:new FormControl(),
    profit:new FormControl(),
    
    duration:new FormControl(),
    startDate:new FormControl(),
    endDate:new FormControl(),
  })
  constructor(private services: ProjectEditServiceService,
  private route: ActivatedRoute,
  private router: Router
  ){}


  ngOnInit(): void {

    // this.services.getTask().subscribe((newPost: modelType[]) => {
    //   this.postList = newPost; console.log(this.postList) })

    this.id = this.route.snapshot.params['postIds'];
    this.services.find(this.id).subscribe((task:modelType) => {
      this.postList = task
      console.log('------------------------',this.postList)

      this.form2 = new FormGroup({
        id: new FormControl(this.postList.id),
        name:new FormControl(this.postList.name),
        description:new FormControl(this.postList.description),
        status:new FormControl(this.postList.status),
        company:new FormControl(this.postList.company),
        leader:new FormControl(this.postList.leader),
        budget:new FormControl(this.postList.budget),
        spent:new FormControl(this.postList.spent),
       
        profit:new FormControl(this.postList.profit),
        duration:new FormControl(this.postList.duration),
        startDate:new FormControl(this.postList.startDate),
        endDate:new FormControl(this.postList.endDate),
      })
      // this.form2.setValue(this.postList)
    });
    
    
  }

  update(){
    this.services.updateTask( this.form2.value).subscribe((res:any) => {
      this.router.navigateByUrl('projectList')
    })
  }
}
