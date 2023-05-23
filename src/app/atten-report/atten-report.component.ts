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

  id: number = 123;

  statusGet !: any;

  form2 !: FormGroup;
  // fromDate: any; toDate: any;
  constructor(public services: AttenReportServiceService, private router: Router){}


  ngOnInit(): void {

    this.services.findEmp(this.id).subscribe((task: modelGetEmp) => {
      this.empList = task
      console.log('------------------------', this.empList)

      this.form2 = new FormGroup({
        empId: new FormControl(this.empList.id),
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

    if(this.id != null) {
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
