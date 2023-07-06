import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActorComponent } from './card-actor.component';

describe('CardActorComponent', () => {
  let component: CardActorComponent;
  let fixture: ComponentFixture<CardActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardActorComponent]
    });
    fixture = TestBed.createComponent(CardActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
