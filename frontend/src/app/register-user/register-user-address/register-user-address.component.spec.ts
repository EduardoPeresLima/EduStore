import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserAddressComponent } from './register-user-address.component';

describe('RegisterUserAddressComponent', () => {
  let component: RegisterUserAddressComponent;
  let fixture: ComponentFixture<RegisterUserAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserAddressComponent]
    });
    fixture = TestBed.createComponent(RegisterUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
