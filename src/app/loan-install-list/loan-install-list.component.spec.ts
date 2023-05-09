import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallListComponent } from './loan-install-list.component';

describe('LoanInstallListComponent', () => {
  let component: LoanInstallListComponent;
  let fixture: ComponentFixture<LoanInstallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanInstallListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanInstallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
