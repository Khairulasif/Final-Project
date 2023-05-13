import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './hrCreate/hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HrManageComponent } from './hr-manage/hr-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { LoanInstallmentComponent } from './loan-installment/loan-installment.component';
import { LoanInstallListComponent } from './loan-install-list/loan-install-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ReqPasswordComponent } from './req-password/req-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EducationComponent } from './education/education.component';
import { BankAccountComponent } from './bank-account/bank-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    DashboardComponent,

    HrManageComponent,
    EmpViewComponent,
    EditEmpComponent,
    LoginComponent,
    CreateOrderComponent,
    ViewOrderComponent,
    UserNavComponent,
    NavbarComponent,
    CreateDepartmentComponent,
    CreateDesignationComponent,
    EmpListComponent,
    EmployeeEditComponent,
    DiciplineComponent,
    AttenListComponent,
    AttenReportComponent,
    AttenReport2Component,
    HolidayComponent,
    AddHolidayComponent,
    LeaveApplComponent,
    PayrollListComponent,
    GeneratePayrollComponent,
    GenerateSalaryComponent,
    PaySlipComponent,
    LoanListComponent,
    AddLoanComponent,
    LoanInstallmentComponent,
    LoanInstallListComponent,
    AddAdminComponent,
    ReqPasswordComponent,
    ChangePasswordComponent,
    ProjectListComponent,
    AddProjectComponent,
    EditProjectComponent,
    ViewProjectComponent,
    EducationComponent,
    BankAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
