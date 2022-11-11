import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeNavComponent } from './user-home-nav.component';

describe('UserHomeNavComponent', () => {
  let component: UserHomeNavComponent;
  let fixture: ComponentFixture<UserHomeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
