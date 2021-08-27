import { TestBed } from '@angular/core/testing';

import { ResenasService } from './resena.service';

describe('ResenaService', () => {
  let service: ResenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
