import { TestBed } from '@angular/core/testing';

import { BankAccServiceService } from './bank-acc-service.service';

describe('BankAccServiceService', () => {
  let service: BankAccServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
