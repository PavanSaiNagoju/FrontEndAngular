import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowAllUsersComponent } from './admin-show-all-users.component';

describe('AdminShowAllUsersComponent', () => {
  let component: AdminShowAllUsersComponent;
  let fixture: ComponentFixture<AdminShowAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
