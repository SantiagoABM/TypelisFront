import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActorComponent } from './detail-actor.component';

describe('DetailActorComponent', () => {
  let component: DetailActorComponent;
  let fixture: ComponentFixture<DetailActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailActorComponent]
    });
    fixture = TestBed.createComponent(DetailActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
