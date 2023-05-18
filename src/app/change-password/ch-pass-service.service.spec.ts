import { TestBed } from '@angular/core/testing';

import { ChPassServiceService } from './ch-pass-service.service';

describe('ChPassServiceService', () => {
  let service: ChPassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChPassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
