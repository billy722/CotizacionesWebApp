import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblematicasComponent } from './problematicas.component';

describe('ProblematicasComponent', () => {
  let component: ProblematicasComponent;
  let fixture: ComponentFixture<ProblematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblematicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
