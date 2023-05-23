import { Component, OnInit } from '@angular/core';
import { AttenReportServiceService } from './atten-report-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { modelGetEmp } from './modelGetEmp';

@Component({
  selector: 'app-atten-report',
  templateUrl: './atten-report.component.html',
  styleUrls: ['./atten-report.component.css']
})
export class AttenReportComponent implements OnInit{

  empList!: modelGetEmp;

  empid: number = 123;

  statusGet !: any;

  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: AttenReportServiceService, private router: Router){}


  ngOnInit(): void {

    this.services.findEmp(this.empid).subscribe((task: modelGetEmp) => {
      this.empList = task
      console.log('------------------------', this.empList)

      this.form2 = new FormGroup({
        id: new FormControl(),
        empId: new FormControl(this.empList.empId),
        name: new FormControl(this.empList.fname),
        date: new FormControl(),
        signIn: new FormControl(),
        signOut: new FormControl(),
        workingHour: new FormControl(),
        department: new FormControl(this.empList.department),
        designation: new FormControl(this.empList.designation),

        

        status: new FormControl(this.statusGet),
        
        
      })
      
    });

    if(this.empid != null) {
      this.statusGet = "Present";
    } else {
      this.statusGet = "Absent";
    }


    
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('attenList');
    })

}

}
