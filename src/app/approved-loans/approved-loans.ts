import { LoanApplication } from '../loan-application/loan-application';

 
export class ApprovedLoans{
    loanId: number;
    emi: number;
    emidate: Date;
    
    loanapp:LoanApplication;
   constructor(loanId:number, emi:number, emidate:Date,loanapp:LoanApplication)
    {
    
        this.loanId = loanId;
        this.emi = emi;
        this.emidate = emidate;

        this.loanapp = loanapp;
    }
 
    
}  