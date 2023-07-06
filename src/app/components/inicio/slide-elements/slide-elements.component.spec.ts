import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideElementsComponent } from './slide-elements.component';

describe('SlideElementsComponent', () => {
  let component: SlideElementsComponent;
  let fixture: ComponentFixture<SlideElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideElementsComponent]
    });
    fixture = TestBed.createComponent(SlideElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
