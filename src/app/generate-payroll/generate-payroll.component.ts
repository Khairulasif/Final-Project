import { Component, OnInit } from '@angular/core';
import { modelDepartment } from './modelDepartment';
import { GenPayrollServiceService } from './gen-payroll-service.service';
import { modelType } from './model';

@Component({
  selector: 'app-generate-payroll',
  templateUrl: './generate-payroll.component.html',
  styleUrls: ['./generate-payroll.component.css']
})
export class GeneratePayrollComponent implements OnInit{

  departmentList!: modelDepartment[];

  selectedDepartment!: string;
  selectedMonth!: string;
  getEmpList!: any;



  constructor(private services: GenPayrollServiceService) { }

  ngOnInit(): void {

    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
      })

}

onDepSubmit(): void {
    
  console.log(this.selectedDepartment);

  this.services.getEmpByDepart(this.selectedDepartment).subscribe((newPost: modelType[]) => {
    this.getEmpList = newPost; console.log(this.getEmpList) })
}

onSubmitMonth(): void {
    
  console.log(this.selectedMonth);

  this.services.getEmpByMonth(this.selectedMonth).subscribe((newPost: modelType[]) => {
    this.getEmpList = newPost; console.log(this.getEmpList) })
}

}
