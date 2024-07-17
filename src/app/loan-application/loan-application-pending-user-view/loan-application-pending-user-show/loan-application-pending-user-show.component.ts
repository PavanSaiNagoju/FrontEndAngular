import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoanApplication } from '../../loan-application';

@Component({
  selector: 'app-loan-application-pending-user-show',
  templateUrl: './loan-application-pending-user-show.component.html',
  styleUrls: ['./loan-application-pending-user-show.component.css']
})
export class LoanApplicationPendingUserShowComponent implements OnInit {
@Input() loan:any;
@Output() update=new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  updatePendingLoanApplication(loan:LoanApplication){
    this.update.emit(loan)
  }

}
