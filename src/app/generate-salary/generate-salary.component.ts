import { Component, OnInit } from '@angular/core';
import { modelInf } from './modelEmpInf';
import { FormControl, FormGroup } from '@angular/forms';
import { GenSalaryServiceService } from './gen-salary-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { modelAllowance } from './modelAllowance';
import { modelDeduct } from './modelDeduction';

@Component({
  selector: 'app-generate-salary',
  templateUrl: './generate-salary.component.html',
  styleUrls: ['./generate-salary.component.css']
})
export class GenerateSalaryComponent implements OnInit{

  id!: number;

  empInf!: modelInf;

  form2!: FormGroup;

  selectedMonth!: string;

  allowanceInf!: modelAllowance;

  deductInf!: modelDeduct;

  // finalsal: number = 0;


  constructor(private services: GenSalaryServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {

    this.id = this.route.snapshot.params['postIds'];

   
    
    this.services.find(this.id).subscribe((task: modelInf) => {
      this.empInf = task;
      console.log(this.empInf);
      
      
      

     
      

      this.form2 = new FormGroup({
        id: new FormControl(),
        employeeId: new FormControl(this.empInf.employeeId),
        employeeName: new FormControl(this.empInf.fname),
        month: new FormControl(),
        basicSalary: new FormControl(this.empInf.basicSalary),
        bonus: new FormControl(),
        
       
        allowance: new FormControl(this.allowanceInf.total),
        deduction: new FormControl(this.deductInf.total),
        payDate: new FormControl(),
        finalSalary: new FormControl(),
        status: new FormControl(),
        paidType: new FormControl(),
       
       
    
       
      })
      
      // this.calculate();
      
   
    });
    
  }

  // calculate() {
  //   this.finalsal = (this.form2.value.basicSalary + this.form2.value.allowance + this.form2.value.bonus) - this.form2.value.deduction ;
  
   
    
  // }

  onSubmit() {

    this.services.findAllowanceInf(this.id, this.selectedMonth).subscribe((task: modelAllowance) => {
      this.allowanceInf = task;
      console.log(this.allowanceInf);

    });

    this.services.findDeductInf(this.id, this.selectedMonth).subscribe((task: modelDeduct) => {
      this.deductInf = task;
      console.log(this.deductInf);

    });

  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('generatePayroll');
    })
  
  }

}
