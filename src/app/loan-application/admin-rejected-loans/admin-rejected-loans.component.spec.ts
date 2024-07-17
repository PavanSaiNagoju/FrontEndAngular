import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedLoansComponent } from './admin-rejected-loans.component';

describe('AdminRejectedLoansComponent', () => {
  let component: AdminRejectedLoansComponent;
  let fixture: ComponentFixture<AdminRejectedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRejectedLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRejectedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
