import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetalles } from './empleado-detalles';

describe('EmpleadoDetalles', () => {
  let component: EmpleadoDetalles;
  let fixture: ComponentFixture<EmpleadoDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoDetalles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
