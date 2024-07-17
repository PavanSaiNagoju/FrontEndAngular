import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationApprovedUserComponent } from './loan-application-approved-user.component';

describe('LoanApplicationApprovedUserComponent', () => {
  let component: LoanApplicationApprovedUserComponent;
  let fixture: ComponentFixture<LoanApplicationApprovedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationApprovedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationApprovedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
