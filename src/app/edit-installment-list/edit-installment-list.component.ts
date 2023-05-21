import { Component, OnInit } from '@angular/core';
import { modelType } from './model';
import { FormControl, FormGroup } from '@angular/forms';
import { EditInstallmentService } from './edit-installment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-installment-list',
  templateUrl: './edit-installment-list.component.html',
  styleUrls: ['./edit-installment-list.component.css']
})
export class EditInstallmentListComponent implements OnInit{

  id!: number;
  postList!: modelType;
  form2: FormGroup = new FormGroup({
    id: new FormControl(),
        name: new FormControl(),
        loanNo: new FormControl(),
        installmentAmount: new FormControl(),
        receiveDate: new FormControl(),
        receiver: new FormControl(),
        installmentNo: new FormControl(),
        note: new FormControl(),

   
  })
  constructor(private services: EditInstallmentService,
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
        loanNo: new FormControl(this.postList.loanNo),
        installmentAmount: new FormControl(this.postList.installmentAmount),
        receiveDate: new FormControl(this.postList.receiveDate),
        receiver: new FormControl(this.postList.receiver),
        installmentNo: new FormControl(this.postList.installmentNo),
        note: new FormControl(this.postList.note),
        
        
      })
      // this.form2.setValue(this.postList)
    });


  }

  update() {
    this.services.updateTask(this.form2.value).subscribe((res: any) => {
      this.router.navigateByUrl('installList')
    })
  }

}
