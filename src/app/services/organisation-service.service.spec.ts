import { TestBed } from '@angular/core/testing';

import { OrganisationServiceService } from './organisation-service.service';

describe('OrganisationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisationServiceService = TestBed.get(OrganisationServiceService);
    expect(service).toBeTruthy();
  });
});
