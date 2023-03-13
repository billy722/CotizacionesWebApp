import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCuestionarioComponent } from './configuracion-cuestionario.component';

describe('ConfiguracionCuestionarioComponent', () => {
  let component: ConfiguracionCuestionarioComponent;
  let fixture: ComponentFixture<ConfiguracionCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionCuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
