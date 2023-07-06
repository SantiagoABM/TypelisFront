import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategeneroComponent } from './updategenero.component';

describe('UpdategeneroComponent', () => {
  let component: UpdategeneroComponent;
  let fixture: ComponentFixture<UpdategeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdategeneroComponent]
    });
    fixture = TestBed.createComponent(UpdategeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
