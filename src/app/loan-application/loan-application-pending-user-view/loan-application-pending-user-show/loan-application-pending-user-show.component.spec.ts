import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationPendingUserShowComponent } from './loan-application-pending-user-show.component';

describe('LoanApplicationUserShowComponent', () => {
  let component: LoanApplicationPendingUserShowComponent;
  let fixture: ComponentFixture<LoanApplicationPendingUserShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationPendingUserShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationPendingUserShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
