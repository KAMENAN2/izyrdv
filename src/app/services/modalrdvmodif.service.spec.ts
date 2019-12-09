import { TestBed } from '@angular/core/testing';

import { ModalrdvmodifService } from './modalrdvmodif.service';

describe('ModalrdvmodifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalrdvmodifService = TestBed.get(ModalrdvmodifService);
    expect(service).toBeTruthy();
  });
});
