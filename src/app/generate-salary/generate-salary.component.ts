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

  

  totalAllowance: number = 0;
  totalDeduct: number = 0;

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
        
       
        allowance: new FormControl(this.totalAllowance),
        deduction: new FormControl(this.totalDeduct),
        payDate: new FormControl(),
        finalSalary: new FormControl(this.calculateSalary),
        status: new FormControl(),
        paidType: new FormControl(),
       
       
    
       
      })
      
      
      
   
    });
    
  }

 

  onSubmit() {

    this.services.findAllowanceInf(this.id, this.selectedMonth).subscribe((task: modelAllowance) => {
      this.allowanceInf = task;
      this.totalAllowance = this.allowanceInf.total;
      
      

    });

    this.services.findDeductInf(this.id, this.selectedMonth).subscribe((task: modelDeduct) => {
      this.deductInf = task;
      this.totalDeduct = this.deductInf.total;

    });

    this.calculate();
   
    

  }

  calculateSalary: number = 0;

  calculate() {
    this.calculateSalary = (this.empInf.basicSalary + this.totalAllowance) - this.totalDeduct ;
    console.log(this.calculateSalary);
    
   
    
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('generatePayroll');
    })
  
  }

}
