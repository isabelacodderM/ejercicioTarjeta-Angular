import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioTarjeta } from './ejercicio-tarjeta';

describe('EjercicioTarjeta', () => {
  let component: EjercicioTarjeta;
  let fixture: ComponentFixture<EjercicioTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioTarjeta],
    }).compileComponents();

    fixture = TestBed.createComponent(EjercicioTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
