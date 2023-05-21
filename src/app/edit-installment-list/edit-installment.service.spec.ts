import { TestBed } from '@angular/core/testing';

import { EditInstallmentService } from './edit-installment.service';

describe('EditInstallmentService', () => {
  let service: EditInstallmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditInstallmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
