import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankAccServiceService } from './bank-acc-service.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit{

  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: BankAccServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    id: new FormControl(),
    bankName:new FormControl(),
    accountName:new FormControl(),
    accountNo:new FormControl(),
    branch:new FormControl(),
    method:new FormControl(),
    
    
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
