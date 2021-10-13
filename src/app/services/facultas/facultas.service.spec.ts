import { TestBed } from '@angular/core/testing';

import { FacultasService } from './facultas.service';

describe('FacultasService', () => {
  let service: FacultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
