import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountPopupComponent } from './add-account-popup.component';

describe('AddAccountPopupComponent', () => {
  let component: AddAccountPopupComponent;
  let fixture: ComponentFixture<AddAccountPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAccountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
