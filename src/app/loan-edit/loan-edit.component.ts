import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanEditServiceService } from './loan-edit-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit{

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    loanAmount: new FormControl(),
    approveDate: new FormControl(),
    installmentPeriod: new FormControl(),
    
   
    installmentAmount: new FormControl(),
    loanNo: new FormControl(),
    status: new FormControl(),
    loanDetail: new FormControl(),

   
  })
  constructor(private services: LoanEditServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    // this.services.getTask().subscribe((newPost: modelType[]) => {
    //   this.postList = newPost; console.log(this.postList) })

    this.id = this.route.snapshot.params['postIds']; 
    this.services.find(this.id).subscribe((task: modelType) => {
      this.postList = task
      console.log('------------------------', this.postList)

      this.form2 = new FormGroup({
        id: new FormControl(this.postList.id),
        name: new FormControl(this.postList.name),
        loanAmount: new FormControl(this.postList.loanAmount),
        approveDate: new FormControl(this.postList.approveDate),
        installmentPeriod: new FormControl(this.postList.installmentPeriod),
        installmentAmount: new FormControl(this.postList.installmentAmount),
        loanNo: new FormControl(this.postList.loanNo),

        status: new FormControl(this.postList.status),
        loanDetail: new FormControl(this.postList.loanDetail),
        
      })
      // this.form2.setValue(this.postList)
    });


  }

  update() {
    this.services.updateTask(this.form2.value).subscribe((res: any) => {
      this.router.navigateByUrl('loanList')
    })
  }

}
