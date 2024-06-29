import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountComponent } from './buyer-account.component';

describe('BuyerAccountComponent', () => {
  let component: BuyerAccountComponent;
  let fixture: ComponentFixture<BuyerAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
