import { Component, OnInit } from '@angular/core';
import { modelDepartment } from './modelDepartment';
import { ListServiceService } from './list-service.service';
import { modelType } from './model';

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.css']
})
export class PayrollListComponent implements OnInit {

  departmentList!: modelDepartment[];

  selectedDepartment!: string;
  selectedMonth!: string;

  paidList!: any;

  searchhr:any;

  constructor(private services: ListServiceService) { }

  ngOnInit(): void {

    this.services.getDepartment().subscribe((newPost: modelDepartment[]) => {
      this.departmentList = newPost;
      })

}

onDepSubmit(): void {
    
  console.log(this.selectedDepartment);

  this.services.getpaidByDepart(this.selectedDepartment).subscribe((newPost: modelType[]) => {
    this.paidList = newPost; console.log(this.paidList) })
}

onSubmitMonth(): void {
    
  console.log(this.selectedMonth);

  this.services.getpaidByMonth(this.selectedMonth).subscribe((newPost: modelType[]) => {
    this.paidList = newPost; console.log(this.paidList) })
}


}
