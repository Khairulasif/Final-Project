import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpEditServiceService } from './emp-edit-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{

  

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    id: new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    department:new FormControl(),
    designation:new FormControl(),
    nationality:new FormControl(),
    nic:new FormControl(),
    address:new FormControl(),
  })
  constructor(private services: EmpEditServiceService,
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
        fname:new FormControl(this.postList.fname),
        lname:new FormControl(this.postList.lname),
        mobile:new FormControl(this.postList.mobile),
        email:new FormControl(this.postList.email),
        gender:new FormControl(this.postList.gender),
        department:new FormControl(this.postList.department),
       
        designation:new FormControl(this.postList.designation),
        nationality:new FormControl(this.postList.nationality),
        nic:new FormControl(this.postList.nic),
        address:new FormControl(this.postList.address),
      })
      // this.form2.setValue(this.postList)
    });
    
    
  }

  update(){
    this.services.updateTask( this.form2.value).subscribe((res:any) => {
      this.router.navigateByUrl('employeeList')
    })
  }
  
}