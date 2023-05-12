import { TestBed } from '@angular/core/testing';

import { HolidayListServiceService } from './holiday-list-service.service';

describe('HolidayListServiceService', () => {
  let service: HolidayListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
