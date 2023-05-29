import { Component, OnInit } from '@angular/core';
import { DeductionServiceService } from './deduction-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { modelInf } from './modelEmpInfDeduct';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css']
})
export class DeductionComponent implements OnInit{


  id!: number;

  empInf!: modelInf;

  form2!: FormGroup;

  addDeduct: number = 0;


  constructor(private services: DeductionServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['postIds'];

   
    
    this.services.find(this.id).subscribe((task: modelInf) => {
      this.empInf = task;

      
      

     
      

      this.form2 = new FormGroup({
        id: new FormControl(),
        employeeId: new FormControl(this.empInf.employeeId),
        employeeName: new FormControl(this.empInf.fname),
        month: new FormControl(),
        basicSalary: new FormControl(this.empInf.basicSalary),
        epf: new FormControl((this.empInf.basicSalary / 100) * 2.5),
        
       
        lwf: new FormControl((this.empInf.basicSalary / 100) * 1),
        pt: new FormControl((this.empInf.basicSalary / 100) * 1.5),
        loan: new FormControl((this.empInf.basicSalary / 100) * 5),
       
        total: new FormControl(this.addDeduct),
    
       
      })
      
      
      this.addTotal();
   
    });


   
  }

  addTotal() {
    this.addDeduct = this.form2.value.epf + this.form2.value.lwf + this.form2.value.pt + this.form2.value.loan;
  
   
    
  }

  submit() {
    console.log(this.form2.value);
    this.services.addTask(this.form2.value).subscribe((res:any) => {
      console.log('Post created successfully');
      this.router.navigateByUrl('generatePayroll');
    })
  
  }

}

