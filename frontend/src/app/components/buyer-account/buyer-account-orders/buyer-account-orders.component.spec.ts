import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountOrdersComponent } from './buyer-account-orders.component';

describe('BuyerAccountOrdersComponent', () => {
  let component: BuyerAccountOrdersComponent;
  let fixture: ComponentFixture<BuyerAccountOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountOrdersComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
