import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountSidebarComponent } from './buyer-account-sidebar.component';

describe('BuyerAccountSidebarComponent', () => {
  let component: BuyerAccountSidebarComponent;
  let fixture: ComponentFixture<BuyerAccountSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerAccountSidebarComponent]
    });
    fixture = TestBed.createComponent(BuyerAccountSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
