import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserHomeComponent } from './page-user-home.component';

describe('PageUserHomeComponent', () => {
  let component: PageUserHomeComponent;
  let fixture: ComponentFixture<PageUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
