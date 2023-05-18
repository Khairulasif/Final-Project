import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { ChPassServiceService } from './ch-pass-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    this: new FormControl(),
    password: new FormControl(),
    retypePassword: new FormControl(),
    
  })

  constructor(private services: ChPassServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.services.getTask().subscribe((newPost: modelType[]) => {
    //   this.postList = newPost; console.log(this.postList) })

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    // this.id = this.route.snapshot.params['id'];
    this.services.find(this.id).subscribe((task: modelType) => {
      this.postList = task
      console.log('------------------------', this.postList)

      this.form2 = new FormGroup({
        
        id: new FormControl(this.postList.id),
        name: new FormControl(this.postList.name),
        email: new FormControl(this.postList.email),
        userName: new FormControl(this.postList.userName),
        password: new FormControl(this.postList.password),
        retypePassword: new FormControl(this.postList.retypePassword),
       
      })
      // this.form2.setValue(this.postList)
    });


  }

  update() {
    this.services.updateTask(this.form2.value).subscribe((res: any) => {
      // this.router.navigateByUrl('employeeList')
    })
  }

}
