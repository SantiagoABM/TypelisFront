import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideActoresComponent } from './slide-actores.component';

describe('SlideActoresComponent', () => {
  let component: SlideActoresComponent;
  let fixture: ComponentFixture<SlideActoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideActoresComponent]
    });
    fixture = TestBed.createComponent(SlideActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
