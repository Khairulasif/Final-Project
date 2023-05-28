import { TestBed } from '@angular/core/testing';

import { GenPayrollServiceService } from './gen-payroll-service.service';

describe('GenPayrollServiceService', () => {
  let service: GenPayrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenPayrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
