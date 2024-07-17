import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePendingLoansComponent } from './approve-pending-loans.component';

describe('ApprovePendingLoansComponent', () => {
  let component: ApprovePendingLoansComponent;
  let fixture: ComponentFixture<ApprovePendingLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePendingLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePendingLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
