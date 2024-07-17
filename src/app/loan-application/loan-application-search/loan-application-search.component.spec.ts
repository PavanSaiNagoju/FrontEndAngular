import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationSearchComponent } from './loan-application-search.component';

describe('LoanApplicationSearchComponent', () => {
  let component: LoanApplicationSearchComponent;
  let fixture: ComponentFixture<LoanApplicationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
