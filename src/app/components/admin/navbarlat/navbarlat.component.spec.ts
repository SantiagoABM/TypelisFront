import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlatComponent } from './navbarlat.component';

describe('NavbarlatComponent', () => {
  let component: NavbarlatComponent;
  let fixture: ComponentFixture<NavbarlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarlatComponent]
    });
    fixture = TestBed.createComponent(NavbarlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
