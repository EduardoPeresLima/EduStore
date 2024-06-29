import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountMainComponent } from './buyer-account-main.component';

describe('BuyerAccountMainComponent', () => {
  let component: BuyerAccountMainComponent;
  let fixture: ComponentFixture<BuyerAccountMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountMainComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
