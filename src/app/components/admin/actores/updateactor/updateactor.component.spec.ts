import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactorComponent } from './updateactor.component';

describe('UpdateactorComponent', () => {
  let component: UpdateactorComponent;
  let fixture: ComponentFixture<UpdateactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateactorComponent]
    });
    fixture = TestBed.createComponent(UpdateactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
