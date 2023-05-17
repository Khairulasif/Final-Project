import { TestBed } from '@angular/core/testing';

import { ReqPassServiceService } from './req-pass-service.service';

describe('ReqPassServiceService', () => {
  let service: ReqPassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqPassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
