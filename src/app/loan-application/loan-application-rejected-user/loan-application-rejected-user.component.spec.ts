import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationRejectedUserComponent } from './loan-application-rejected-user.component';

describe('LoanApplicationRejectedUserComponent', () => {
  let component: LoanApplicationRejectedUserComponent;
  let fixture: ComponentFixture<LoanApplicationRejectedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationRejectedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationRejectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
