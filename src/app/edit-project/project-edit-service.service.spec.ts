import { TestBed } from '@angular/core/testing';

import { ProjectEditServiceService } from './project-edit-service.service';

describe('ProjectEditServiceService', () => {
  let service: ProjectEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
