import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanInstallmentServiceService } from './loan-installment-service.service';

@Component({
  selector: 'app-loan-installment',
  templateUrl: './loan-installment.component.html',
  styleUrls: ['./loan-installment.component.css']
})
export class LoanInstallmentComponent implements OnInit{

  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: LoanInstallmentServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    loanNo:new FormControl(),
    status:new FormControl(),
    installmentAmount:new FormControl(),
    receiveDate:new FormControl(),
    receiver:new FormControl(),
    installmentNo:new FormControl(),
    
    note:new FormControl(),
   
    
    })
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('installList');
    })

}

}
