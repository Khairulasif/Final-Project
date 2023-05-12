import { TestBed } from '@angular/core/testing';

import { AddHolidayServiceService } from './add-holiday-service.service';

describe('AddHolidayServiceService', () => {
  let service: AddHolidayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHolidayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
