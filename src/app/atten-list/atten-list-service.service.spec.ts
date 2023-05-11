import { TestBed } from '@angular/core/testing';

import { AttenListServiceService } from './atten-list-service.service';

describe('AttenListServiceService', () => {
  let service: AttenListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttenListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
