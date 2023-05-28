import { TestBed } from '@angular/core/testing';

import { GenSalaryServiceService } from './gen-salary-service.service';

describe('GenSalaryServiceService', () => {
  let service: GenSalaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenSalaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
