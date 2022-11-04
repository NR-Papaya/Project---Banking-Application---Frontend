import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormModalComponent } from './register-form-modal.component';

describe('RegisterFormModalComponent', () => {
  let component: RegisterFormModalComponent;
  let fixture: ComponentFixture<RegisterFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
