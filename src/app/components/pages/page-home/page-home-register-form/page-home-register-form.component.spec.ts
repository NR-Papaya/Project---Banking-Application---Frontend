import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeRegisterFormComponent } from './page-home-register-form.component';

describe('PageHomeRegisterFormComponent', () => {
  let component: PageHomeRegisterFormComponent;
  let fixture: ComponentFixture<PageHomeRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
