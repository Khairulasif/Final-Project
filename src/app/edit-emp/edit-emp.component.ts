import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { modelType } from './model';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit{

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    id: new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    role:new FormControl(),
    nationality:new FormControl(),
    nic:new FormControl(),
    address:new FormControl(),
  })
  constructor(private services: PostService,
  private route: ActivatedRoute,
  private router: Router
  ){}





  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['postId'];
    this.services.find(this.id).subscribe((task:modelType) => {
      this.postList = task
      console.log('------------------------',this.postList)
      this.form2 = new FormGroup({
        id: new FormControl(this.postList.id),
        fname:new FormControl(this.postList.fname),
        lname:new FormControl(this.postList.lname),
        mobile:new FormControl(this.postList.mobile),
        email:new FormControl(this.postList.email),
        gender:new FormControl(this.postList.gender),
        role:new FormControl(this.postList.role),
        nationality:new FormControl(this.postList.nationality),
        nic:new FormControl(this.postList.nic),
        address:new FormControl(this.postList.address),
      })
      // this.form2.setValue(this.postList)
    });
  }

  update(){
    this.services.updateTask(this.id, this.form2.value).subscribe((res:any) => {
      this.router.navigateByUrl('employeeList')
    })
  }
}
