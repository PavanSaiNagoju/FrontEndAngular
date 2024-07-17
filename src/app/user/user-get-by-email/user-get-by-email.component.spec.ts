import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetByEmailComponent } from './user-get-by-email.component';

describe('UserGetByEmailComponent', () => {
  let component: UserGetByEmailComponent;
  let fixture: ComponentFixture<UserGetByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetByEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
