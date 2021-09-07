import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaCommentComponent } from './resena-comment.component';

describe('ResenaCommentComponent', () => {
  let component: ResenaCommentComponent;
  let fixture: ComponentFixture<ResenaCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
