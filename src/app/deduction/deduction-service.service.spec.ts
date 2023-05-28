import { TestBed } from '@angular/core/testing';

import { DeductionServiceService } from './deduction-service.service';

describe('DeductionServiceService', () => {
  let service: DeductionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeductionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
