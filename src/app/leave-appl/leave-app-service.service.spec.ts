import { TestBed } from '@angular/core/testing';

import { LeaveAppServiceService } from './leave-app-service.service';

describe('LeaveAppServiceService', () => {
  let service: LeaveAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
