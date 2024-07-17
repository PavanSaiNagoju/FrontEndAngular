import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationPendingUserViewComponent } from './loan-application-pending-user-view.component';

describe('LoanApplicationUserViewComponent', () => {
  let component: LoanApplicationPendingUserViewComponent;
  let fixture: ComponentFixture<LoanApplicationPendingUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationPendingUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationPendingUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
