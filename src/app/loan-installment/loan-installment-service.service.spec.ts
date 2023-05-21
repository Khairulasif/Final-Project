import { TestBed } from '@angular/core/testing';

import { LoanInstallmentServiceService } from './loan-installment-service.service';

describe('LoanInstallmentServiceService', () => {
  let service: LoanInstallmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanInstallmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
