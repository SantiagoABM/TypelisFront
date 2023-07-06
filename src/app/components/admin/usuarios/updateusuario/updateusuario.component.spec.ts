import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateusuarioComponent } from './updateusuario.component';

describe('UpdateusuarioComponent', () => {
  let component: UpdateusuarioComponent;
  let fixture: ComponentFixture<UpdateusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateusuarioComponent]
    });
    fixture = TestBed.createComponent(UpdateusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
