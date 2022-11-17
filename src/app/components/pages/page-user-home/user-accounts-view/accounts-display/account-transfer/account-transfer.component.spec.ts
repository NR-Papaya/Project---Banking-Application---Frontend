import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferComponent } from './account-transfer.component';

describe('AccountTransferComponent', () => {
  let component: AccountTransferComponent;
  let fixture: ComponentFixture<AccountTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
