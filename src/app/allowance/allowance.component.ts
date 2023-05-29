import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllowanceServiceService } from './allowance-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { modelEmpInf } from './modelEmpInformation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent implements OnInit{

  
  id!: number;

  form2!: FormGroup;

  empInf!: modelEmpInf;

  currentDate: Date = new Date(); // Initialize with current date
  datePipe: DatePipe = new DatePipe('bn-BD');

  addSalary: number = 0;
  

  

  constructor(private services: AllowanceServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

 


  ngOnInit(): void {

    

    this.id = this.route.snapshot.params['postIds'];

   
    
    this.services.find(this.id).subscribe((task: modelEmpInf) => {
      this.empInf = task;

     
      

      this.form2 = new FormGroup({
        id: new FormControl(),
        employeeId: new FormControl(this.empInf.employeeId),
        employeeName: new FormControl(this.empInf.fname),
        month: new FormControl(),
        basicSalary: new FormControl(this.empInf.basicSalary),
        hra: new FormControl((this.empInf.basicSalary / 100) * 15),
        
       
        ta: new FormControl((this.empInf.basicSalary / 100) * 5),
        da: new FormControl((this.empInf.basicSalary / 100) * 1),
        medicalAllowance: new FormControl((this.empInf.basicSalary / 100) * 5),
        mobileAllowance: new FormControl((this.empInf.basicSalary / 100) * 1.5),
        total: new FormControl(this.addSalary),
    
       
      })
      
      
      this.addTotal();
   
    });

    

  
    

}



addTotal() {
  this.addSalary = this.form2.value.basicSalary + this.form2.value.hra + this.form2.value.hra + this.form2.value.ta + this.form2.value.da + this.form2.value.medicalAllowance + this.form2.value.mobileAllowance;
 console.log(this.addSalary);
 
  
}

submit() {
  console.log(this.form2.value);
  this.services.addTask(this.form2.value).subscribe((res:any) => {
    console.log('Post created successfully');
    this.router.navigateByUrl('generatePayroll');
  })

}

// getMonthName(): string {
//   return this.datePipe.transform(this.currentDate, 'MMMM');
// }
}



// function getMonthName() {
//   throw new Error('Function not implemented.');
// }

