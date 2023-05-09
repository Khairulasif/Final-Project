import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallmentComponent } from './loan-installment.component';

describe('LoanInstallmentComponent', () => {
  let component: LoanInstallmentComponent;
  let fixture: ComponentFixture<LoanInstallmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanInstallmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
