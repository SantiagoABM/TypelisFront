import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeliculaComponent } from './card-pelicula.component';

describe('CardPeliculaComponent', () => {
  let component: CardPeliculaComponent;
  let fixture: ComponentFixture<CardPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPeliculaComponent]
    });
    fixture = TestBed.createComponent(CardPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
