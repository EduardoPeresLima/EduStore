import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountWalletComponent } from './buyer-account-wallet.component';

describe('BuyerAccountWalletComponent', () => {
  let component: BuyerAccountWalletComponent;
  let fixture: ComponentFixture<BuyerAccountWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountWalletComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
