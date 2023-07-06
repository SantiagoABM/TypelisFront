import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpeliculaComponent } from './newpelicula.component';

describe('NewpeliculaComponent', () => {
  let component: NewpeliculaComponent;
  let fixture: ComponentFixture<NewpeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpeliculaComponent]
    });
    fixture = TestBed.createComponent(NewpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
