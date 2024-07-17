import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationPendingEditComponent } from './loan-application-pending-edit.component';

describe('LoanApplicationPendingEditComponent', () => {
  let component: LoanApplicationPendingEditComponent;
  let fixture: ComponentFixture<LoanApplicationPendingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationPendingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationPendingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
