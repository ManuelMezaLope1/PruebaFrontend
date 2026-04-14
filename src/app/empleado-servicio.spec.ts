import { TestBed } from '@angular/core/testing';

import { EmpleadoServicio } from './empleado-servicio';

describe('EmpleadoServicio', () => {
  let service: EmpleadoServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
