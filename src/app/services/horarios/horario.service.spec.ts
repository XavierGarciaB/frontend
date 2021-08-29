import { TestBed } from '@angular/core/testing';


import {HorariosService} from './horario.service';

describe('AvisoService', () => {
  let service: HorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});