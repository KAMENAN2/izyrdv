import { TestBed } from '@angular/core/testing';

import { CheckrdvService } from './checkrdv.service';

describe('CheckrdvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckrdvService = TestBed.get(CheckrdvService);
    expect(service).toBeTruthy();
  });
});
