import { TestBed } from '@angular/core/testing';

import { EmplistServiceService } from './emplist-service.service';

describe('EmplistServiceService', () => {
  let service: EmplistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
