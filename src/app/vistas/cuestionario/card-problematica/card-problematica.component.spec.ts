import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProblematicaComponent } from './card-problematica.component';

describe('CardProblematicaComponent', () => {
  let component: CardProblematicaComponent;
  let fixture: ComponentFixture<CardProblematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProblematicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProblematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
