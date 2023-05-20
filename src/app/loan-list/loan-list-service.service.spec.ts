import { TestBed } from '@angular/core/testing';

import { LoanListServiceService } from './loan-list-service.service';

describe('LoanListServiceService', () => {
  let service: LoanListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
