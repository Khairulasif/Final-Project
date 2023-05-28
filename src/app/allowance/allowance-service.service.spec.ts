import { TestBed } from '@angular/core/testing';

import { AllowanceServiceService } from './allowance-service.service';

describe('AllowanceServiceService', () => {
  let service: AllowanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
