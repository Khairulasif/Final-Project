import { TestBed } from '@angular/core/testing';

import { AddProjectServiceService } from './add-project-service.service';

describe('AddProjectServiceService', () => {
  let service: AddProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
