import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewactorComponent } from './newactor.component';

describe('NewactorComponent', () => {
  let component: NewactorComponent;
  let fixture: ComponentFixture<NewactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewactorComponent]
    });
    fixture = TestBed.createComponent(NewactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
