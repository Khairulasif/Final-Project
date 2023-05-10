import { Component, OnInit } from '@angular/core';
import { AddProjectServiceService } from './add-project-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{


  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: AddProjectServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    status:new FormControl(),
    company:new FormControl(),
    leader:new FormControl(),
    budget:new FormControl(),
    spent:new FormControl(),
    
    duration:new FormControl(),
    startDate:new FormControl(),
    endDate:new FormControl(),
    
    })
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('projectList');
    })

}


}
