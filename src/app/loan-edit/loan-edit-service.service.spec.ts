import { TestBed } from '@angular/core/testing';

import { LoanEditServiceService } from './loan-edit-service.service';

describe('LoanEditServiceService', () => {
  let service: LoanEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
