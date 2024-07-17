import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAccountDetailsComponent } from './user-view-account-details.component';

describe('UserViewAccountDetailsComponent', () => {
  let component: UserViewAccountDetailsComponent;
  let fixture: ComponentFixture<UserViewAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
