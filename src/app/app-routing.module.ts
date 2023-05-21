import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { HrManageComponent } from './hr-manage/hr-manage.component';
import { HrComponent } from './hrCreate/hr.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { CreateDesignationComponent } from './create-designation/create-designation.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { DiciplineComponent } from './dicipline/dicipline.component';
import { AttenListComponent } from './atten-list/atten-list.component';
import { AttenReportComponent } from './atten-report/atten-report.component';
import { AttenReport2Component } from './atten-report2/atten-report2.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { LeaveApplComponent } from './leave-appl/leave-appl.component';
import { PayrollListComponent } from './payroll-list/payroll-list.component';
import { GeneratePayrollComponent } from './generate-payroll/generate-payroll.component';
import { GenerateSalaryComponent } from './generate-salary/generate-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanInstallListComponent } from './loan-install-list/loan-install-list.component';
import { LoanInstallmentComponent } from './loan-installment/loan-installment.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReqPasswordComponent } from './req-password/req-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { EducationComponent } from './education/education.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { LoanEditComponent } from './loan-edit/loan-edit.component';

// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: "" , component: DashboardComponent},
  // {path: "login" , component: DashboardComponent},
  {path: "" , component: DashboardComponent},
  {path: "dashboard" , component: DashboardComponent},

  {path: "createEmp" , component: HrComponent},
  {path: "manageEmp" , component: HrManageComponent},
  {path: 'post/:postId/view', component: EmpViewComponent },
  // {path: 'post/:postId/edit', component: EditEmpComponent },
  {path: 'createOrder', component: CreateOrderComponent },
  {path: 'vieworder', component: ViewOrderComponent },
  {path: 'createDepartment', component: CreateDepartmentComponent },
  {path: 'createDesignation', component: CreateDesignationComponent },
  {path: 'employeeList', component: EmpListComponent },
  {path: 'employeeEdit/:postIds/edit', component: EmployeeEditComponent },
  {path: 'discipline', component: DiciplineComponent },
  {path: 'attenList', component: AttenListComponent },
  {path: 'addAtten', component: AttenReportComponent },
  {path: 'attendanceList/:postIds/view', component: AttenReport2Component },
  {path: 'holidayList', component: HolidayComponent },
  {path: 'addHoliday', component: AddHolidayComponent },
  {path: 'leaveAppli', component: LeaveApplComponent },
  {path: 'payrollList', component: PayrollListComponent },
  {path: 'generatePayroll', component: GeneratePayrollComponent },
  {path: 'generateSalary', component: GenerateSalaryComponent },
  {path: 'paySlip', component: PaySlipComponent },
  {path: 'loanList', component: LoanListComponent },
  {path: 'addLoan', component: AddLoanComponent },
  {path: 'installList', component: LoanInstallListComponent },
  {path: 'addInstall', component: LoanInstallmentComponent },
  {path: 'addAdmin', component: AddAdminComponent },
  {path: 'reqPass', component: ReqPasswordComponent },
  {path: 'changePass/:id', component: ChangePasswordComponent },
  {path: 'projectList', component: ProjectListComponent },
  {path: 'addProject', component: AddProjectComponent },
  {path: 'editProject/:postIds/edit', component: EditProjectComponent },
  {path: 'viewProject/:postId/view', component: ViewProjectComponent },
  {path: 'employeeEducationForm', component: EducationComponent },
  {path: 'bankAccInformation', component: BankAccountComponent },
  {path: 'loanEdit/:postIds/edit', component: LoanEditComponent },

  {path: "**" , component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
