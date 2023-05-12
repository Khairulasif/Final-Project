import { Component, OnInit } from '@angular/core';
import { AttenReportServiceService } from './atten-report-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atten-report',
  templateUrl: './atten-report.component.html',
  styleUrls: ['./atten-report.component.css']
})
export class AttenReportComponent implements OnInit{

  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: AttenReportServiceService, private router: Router){}


  ngOnInit(): void {

    this.form2 = new FormGroup({
    id: new FormControl(),
    name:new FormControl(),
    date:new FormControl(),
    signIn:new FormControl(),
    signOut:new FormControl(),
    workingHour:new FormControl(),
    department:new FormControl(),
    designation:new FormControl(),
    
    status:new FormControl(),
    
    
    })
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('attenList');
    })

}

}
