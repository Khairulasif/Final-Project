import { TestBed } from '@angular/core/testing';

import { AbsEmpServiceService } from './abs-emp-service.service';

describe('AbsEmpServiceService', () => {
  let service: AbsEmpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsEmpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
