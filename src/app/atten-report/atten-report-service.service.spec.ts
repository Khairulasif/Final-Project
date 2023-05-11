import { TestBed } from '@angular/core/testing';

import { AttenReportServiceService } from './atten-report-service.service';

describe('AttenReportServiceService', () => {
  let service: AttenReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttenReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
