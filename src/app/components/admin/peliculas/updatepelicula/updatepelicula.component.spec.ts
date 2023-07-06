import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepeliculaComponent } from './updatepelicula.component';

describe('UpdatepeliculaComponent', () => {
  let component: UpdatepeliculaComponent;
  let fixture: ComponentFixture<UpdatepeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepeliculaComponent]
    });
    fixture = TestBed.createComponent(UpdatepeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
