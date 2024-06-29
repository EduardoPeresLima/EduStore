import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountDataComponent } from './buyer-account-data.component';

describe('BuyerAccountDataComponent', () => {
  let component: BuyerAccountDataComponent;
  let fixture: ComponentFixture<BuyerAccountDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountDataComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
