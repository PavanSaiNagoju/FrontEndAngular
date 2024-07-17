import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovedLoansComponent } from './admin-approved-loans.component';

describe('AdminApprovedLoansComponent', () => {
  let component: AdminApprovedLoansComponent;
  let fixture: ComponentFixture<AdminApprovedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApprovedLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApprovedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
