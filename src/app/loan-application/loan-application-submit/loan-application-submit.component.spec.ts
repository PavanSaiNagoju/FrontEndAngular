import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationSubmitComponent } from './loan-application-submit.component';

describe('LoanApplicationSubmitComponent', () => {
  let component: LoanApplicationSubmitComponent;
  let fixture: ComponentFixture<LoanApplicationSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
