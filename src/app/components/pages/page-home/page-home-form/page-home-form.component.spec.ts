import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeFormComponent } from './page-home-form.component';

describe('PageHomeFormComponent', () => {
  let component: PageHomeFormComponent;
  let fixture: ComponentFixture<PageHomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
