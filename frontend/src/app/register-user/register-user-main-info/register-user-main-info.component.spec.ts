import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserMainInfoComponent } from './register-user-main-info.component';

describe('RegisterUserMainInfoComponent', () => {
  let component: RegisterUserMainInfoComponent;
  let fixture: ComponentFixture<RegisterUserMainInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserMainInfoComponent]
    });
    fixture = TestBed.createComponent(RegisterUserMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
