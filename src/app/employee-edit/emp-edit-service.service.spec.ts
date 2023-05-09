import { TestBed } from '@angular/core/testing';

import { EmpEditServiceService } from './emp-edit-service.service';

describe('EmpEditServiceService', () => {
  let service: EmpEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
