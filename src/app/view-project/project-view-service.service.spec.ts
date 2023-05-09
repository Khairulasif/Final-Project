import { TestBed } from '@angular/core/testing';

import { ProjectViewServiceService } from './project-view-service.service';

describe('ProjectViewServiceService', () => {
  let service: ProjectViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
