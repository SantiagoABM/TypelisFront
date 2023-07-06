import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewusuarioComponent } from './newusuario.component';

describe('NewusuarioComponent', () => {
  let component: NewusuarioComponent;
  let fixture: ComponentFixture<NewusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewusuarioComponent]
    });
    fixture = TestBed.createComponent(NewusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
