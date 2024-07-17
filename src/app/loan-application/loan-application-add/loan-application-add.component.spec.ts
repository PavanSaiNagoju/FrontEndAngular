import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationAddComponent } from './loan-application-add.component';

describe('LoanApplicationAddComponent', () => {
  let component: LoanApplicationAddComponent;
  let fixture: ComponentFixture<LoanApplicationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
