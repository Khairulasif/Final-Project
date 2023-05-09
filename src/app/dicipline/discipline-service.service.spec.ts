import { TestBed } from '@angular/core/testing';

import { DisciplineServiceService } from './discipline-service.service';

describe('DisciplineServiceService', () => {
  let service: DisciplineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
