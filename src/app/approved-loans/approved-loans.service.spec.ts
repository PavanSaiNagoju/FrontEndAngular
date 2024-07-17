import { TestBed } from '@angular/core/testing';

import { ApprovedLoansService } from './approved-loans.service';

describe('ApprovedLoansService', () => {
  let service: ApprovedLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
