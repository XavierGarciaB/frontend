import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalDescriptionComponent } from './profesional-description.component';

describe('ProfesionalDescriptionComponent', () => {
  let component: ProfesionalDescriptionComponent;
  let fixture: ComponentFixture<ProfesionalDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
